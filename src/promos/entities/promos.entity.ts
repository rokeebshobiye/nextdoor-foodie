import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Brand } from "../../brands/entities/brands.entity";
import { PromoVoucher } from "../../promo_vouchers/entities/promo_vouchers.entity";

@Entity("promos")
export class Promo {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  image_id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "text" })
  terms: string;

  @Column({ type: "jsonb" })
  locations: Record<string, unknown>;

  @Column({ type: "decimal" })
  avg_rating: number;

  @Column({ type: "int" })
  reviews_count: number;

  @Column({ type: "int" })
  redemptions_count: number;

  @Column({ type: "text" })
  eligibility: string;

  @Column({ type: "date" })
  start_date: Date;

  @Column({ type: "int" })
  likes_count: number;

  @Column({ type: "date" })
  end_date: Date;

  @Column({ type: "varchar" })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "varchar" })
  slug: string;
  @ManyToOne(() => Brand, (brand => brand.promos))
  brand: Brand;

  @OneToMany(() => PromoVoucher, (promoVoucher) => promoVoucher.promo)
  promoVoucher: PromoVoucher[];
}