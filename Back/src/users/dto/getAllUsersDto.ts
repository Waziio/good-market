import { IsEmail, IsString, IsOptional } from 'class-validator';

export class GetAllUsersDto {
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly username: string;
}
