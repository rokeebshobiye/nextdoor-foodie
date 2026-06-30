import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Order } from "../../orders/entities/orders.entity";

@Entity("transactions")
export class Transaction {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  reference: string;

  @Column({ type: "decimal" })
  amount: number;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "varchar" })
  currency_code: string;

  @Column({ type: "varchar" })
  payment_provider: string;

  @Column({ type: "varchar" })
  payment_method: string;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @OneToMany(() => Order, (order) => order.transaction)
  order: Order[];
}