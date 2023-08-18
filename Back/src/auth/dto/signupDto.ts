import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
  @Length(8, 20)
  @IsString()
  readonly password: string;
}

