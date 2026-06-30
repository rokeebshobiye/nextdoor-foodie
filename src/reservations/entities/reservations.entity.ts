import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Brand } from "../../brands/entities/brands.entity";

@Entity("reservations")
export class Reservation {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  event_id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "varchar" })
  code: string;

  @Column({ type: "varchar" })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "int" })
  order_id: number;
  @ManyToOne(() => Brand, (brand => brand.reservations))
  brand: Brand;
}