import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Promo } from "../../promos/entities/promos.entity";

@Entity("promo_vouchers")
export class PromoVoucher {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  order_id: number;

  @Column({ type: "int" })
  location_id: number;

  @Column({ type: "int" })
  handler_id: number;

  @Column({ type: "timestamp" })
  expires_at: Date;

  @Column({ type: "timestamp" })
  redeemed_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  code: string;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  promo_id: number;
  @ManyToOne(() => Promo, (promo => promo.promo_vouchers))
  promo: Promo;
}