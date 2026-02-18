import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PcemprEntity } from "../entities/pcempr.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([PcemprEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Promise<JwtModuleOptions> => {
        const secret = configService.get<string>('JWT_SECRET');

        if (!secret) {
          throw new Error('JWT_SECRET is not defined in environment variables.')
        }

        const expiresInValue = configService.get<string>('JWT_EXPIRATION_TIME') as any || '60m';

        const jwtOptions: JwtModuleOptions = {
          secret: secret,
          signOptions: {
            expiresIn: expiresInValue,
          }
        };

        return Promise.resolve(jwtOptions);
      }
    })
  ],

  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [
    AuthService,
    JwtStrategy,
    PassportModule,
    JwtModule,
  ]
})

export class AuthModule { };