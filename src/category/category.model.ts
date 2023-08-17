import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  })
  name: string;
}
