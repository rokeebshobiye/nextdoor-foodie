import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Brand } from "../../brands/entities/brands.entity";

@Entity("brand_analytics")
export class BrandAnalytic {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  promos_created: number;

  @Column({ type: "int" })
  impressions: number;

  @Column({ type: "int" })
  redemptions: number;

  @Column({ type: "int" })
  active_customers: number;

  @Column({ type: "decimal" })
  revenue: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "decimal" })
  platform_commission: number;
  @ManyToOne(() => Brand, (brand => brand.brand_analytics))
  brand: Brand;
}