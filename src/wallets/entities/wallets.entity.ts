import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("wallets")
export class Wallet {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "decimal" })
  balance: number;

  @Column({ type: "decimal" })
  ledger: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}