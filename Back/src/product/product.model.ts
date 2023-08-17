import { DataTypes } from 'sequelize';
import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from '../category/category.model';
import { User } from '../users/user.model';

@Table
export class Product extends Model {
  @Column({ type: DataTypes.STRING, allowNull: false })
  name: string;

  @Column({ type: DataTypes.TEXT })
  description: string;

  @Column({ type: DataTypes.DECIMAL })
  price: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
