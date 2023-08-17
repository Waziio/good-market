import { IsString } from 'class-validator';

export class GetProductsDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly category?: string;
}
