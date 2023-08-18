import { DataTypes } from 'sequelize';
import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Product } from 'src/product/product.model';

@Table
export class User extends Model {
  @Column({ unique: true, allowNull: false, type: DataTypes.STRING })
  email: string;

  @Column({ unique: true, allowNull: false, type: DataTypes.STRING })
  username: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  password: string;

  @Column({ defaultValue: false, type: DataTypes.BOOLEAN })
  isActive: boolean;

  @HasMany(() => Product, { onDelete: 'CASCADE' })
  products: Product[]

}
