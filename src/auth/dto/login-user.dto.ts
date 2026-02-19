import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @ApiProperty({ description: 'Username.', example: 'JOHN.DOE' })
  @IsString()
  @IsNotEmpty()
  nameWar: string;

  @ApiProperty({ description: "The user's CPF for login.", example: '123.456.789-00' })
  @IsString()
  @IsNotEmpty()
  cpf: string;
}