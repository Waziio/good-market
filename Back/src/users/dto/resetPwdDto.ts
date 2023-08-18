import { IsNotEmpty, Length, IsString } from 'class-validator';

export class ResetPwdDto {
  @IsNotEmpty()
  @Length(8, 20)
  @IsString()
  readonly old_password: string;

  @IsNotEmpty()
  @Length(8, 20)
  @IsString()
  readonly new_password: string;
}
