import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Brand } from "../../brands/entities/brands.entity";

@Entity("events")
export class Event {
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

  @Column({ type: "varchar" })
  location: string;

  @Column({ type: "int" })
  max_attendees: number;

  @Column({ type: "varchar" })
  time: string;

  @Column({ type: "varchar" })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  date: string;
  @ManyToOne(() => Brand, (brand => brand.events))
  brand: Brand;
}