import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Brand } from "../../brands/entities/brands.entity";

@Entity("locations")
export class Location {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  country: string;

  @Column({ type: "decimal" })
  latitude: number;

  @Column({ type: "decimal" })
  longitude: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => Brand, (brand => brand.locations))
  brand: Brand;
}