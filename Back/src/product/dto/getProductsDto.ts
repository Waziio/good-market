import { IsString, IsOptional, IsInt } from 'class-validator';

export class GetProductsDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsInt()
  readonly categoryId: number;
}
