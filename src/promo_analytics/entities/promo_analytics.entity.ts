import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("promo_analytics")
export class PromoAnalytic {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  promo_id: number;

  @Column({ type: "int" })
  impressions: number;

  @Column({ type: "int" })
  clicks: number;

  @Column({ type: "int" })
  favorites: number;

  @Column({ type: "int" })
  redemptions: number;

  @Column({ type: "int" })
  active_customers: number;

  @Column({ type: "int" })
  reviews_count: number;

  @Column({ type: "decimal" })
  avg_rating: number;

  @Column({ type: "decimal" })
  revenue: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}