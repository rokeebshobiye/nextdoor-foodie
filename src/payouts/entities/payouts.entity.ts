import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("payouts")
export class Payout {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  payout_account_id: number;

  @Column({ type: "decimal" })
  amount: number;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  method: string;

  @Column({ type: "varchar" })
  reference: string;

  @Column({ type: "decimal" })
  fee: number;

  @Column({ type: "date" })
  initiated_at: Date;

  @Column({ type: "date" })
  processed_at: Date;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}