import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("payout_accounts")
export class PayoutAccount {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "varchar" })
  bank_code: string;

  @Column({ type: "varchar" })
  account_name: string;

  @Column({ type: "varchar" })
  account_number: string;

  @Column({ type: "int" })
  is_primary: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}