import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from '../../accounts/entities/account.entity';

export enum OrderStatus {
  Pending = 'pending',
  Approved = 'approved',
}

@Table({
  tableName: 'orders',
  createdAt: 'created_at',
  updatedAt: 'created_at',
})
export class Order extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUIDV4, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  credit_card_number: string;

  @Column({ allowNull: false })
  credit_card_name: string;

  @Column({ allowNull: false, defaultValue: OrderStatus.Pending })
  status: OrderStatus;

  @ForeignKey(() => Account)
  @Column({ allowNull: false, type: DataType.UUIDV4 })
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;
}
