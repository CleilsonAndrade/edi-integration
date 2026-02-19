import { ForbiddenException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PcemprEntity } from "../modules/entities/pcempr.entity";
import { JwtPayload } from './interfaces/jwt-payload.interface';

export function mapPcemprToJwtPayload(entity: PcemprEntity): JwtPayload {
  const status = entity.situation === 'A' ? 'ativo' : 'inativo';

  const roles: string[] = [
    entity?.codSector?.toString(),
    entity?.areaActing
  ].filter((role): role is string => Boolean(role))

  return {
    registration: entity.registration,
    name: entity?.nameWar ?? '',
    roles: roles,
    status: status,
  }
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(PcemprEntity, 'winthor_conn')
    private readonly userRepository: Repository<PcemprEntity>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async validateUser(cpf: string, nameWar: string): Promise<PcemprEntity | null> {
    const user = await this.userRepository.findOne(({ where: { cpf } }));

    if (!user) {
      return null;
    }

    const nameProvided = nameWar?.trim().toLowerCase();
    const nameRegistered = user.nameWar?.trim().toLowerCase();

    if (nameProvided !== nameRegistered) return null;

    const requiredCodSector = this.configService.get<number>('AUTH_REQUIRED_COD_SECTION');
    const requiredAreaActing = this.configService.get<string>('AUTH_REQUIRED_AREA_ACTING');

    const isDeveloper = user.codSector === Number(requiredCodSector) && user.areaActing === requiredAreaActing;

    if (!isDeveloper) {
      throw new ForbiddenException('Restricted access. User does not belong to the required sector/are.')
    }

    return user;
  }

  async login(cpf: string, nameWar: string): Promise<{ access_token: string, userName: string }> {
    const user = await this.validateUser(cpf, nameWar);

    try {
      if (!user) {
        throw new UnauthorizedException('Invalid credentials.')
      }

      if (user.situation !== 'A') {
        throw new UnauthorizedException('Inactive user.')
      }

      const payload: JwtPayload = mapPcemprToJwtPayload(user);

      return {
        access_token: this.jwtService.sign(payload),
        userName: payload.name,
      }
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      const errorWithMessage = error instanceof Error ? error : { message: 'Unknown error', stack: '' };

      this.logger.error(`Error logging in user ${nameWar}: ${errorWithMessage.message}`,
        error.stack
      )

      throw new InternalServerErrorException('Could not log in due to an internal error.')
    }
  }
}