import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  readonly email: string;
  
  @IsOptional()
  @IsNotEmpty()
  readonly username: string;
}
