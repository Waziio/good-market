import { IsString, IsOptional, IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsInt()
  @IsNotEmpty()
  readonly categoryId: number;

  @IsInt()
  @IsNotEmpty()
  readonly userId: number;
}
