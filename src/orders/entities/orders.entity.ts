import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Transaction } from "../../transactions/entities/transactions.entity";

@Entity("orders")
export class Order {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  item_id: number;

  @Column({ type: "varchar" })
  item_type: string;

  @Column({ type: "int" })
  transaction_id: number;

  @Column({ type: "decimal" })
  amount: number;

  @Column({ type: "varchar" })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "int" })
  brand_id: number;
  @ManyToOne(() => Transaction, (transaction => transaction.orders))
  transaction: Transaction;
}