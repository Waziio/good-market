import { DataTypes } from 'sequelize';
import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Characteristics } from 'src/characteristics/characteristics.model';
import { Product } from 'src/product/product.model';

@Table
export class Category extends Model {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Product)
  products: Product[];

  @HasMany(() => Characteristics) 
  characteristics: Characteristics[]; 
}