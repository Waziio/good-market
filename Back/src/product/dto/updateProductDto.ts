import { IsString, IsOptional, IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  readonly categoryId: number;
}
