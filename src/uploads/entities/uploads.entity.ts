import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Advert } from "../../adverts/entities/adverts.entity";
import { Brand } from "../../brands/entities/brands.entity";
import { Category } from "../../categories/entities/categories.entity";

@Entity("uploads")
export class Upload {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  url: string;

  @Column({ type: "varchar" })
  provider: string;

  @Column({ type: "varchar" })
  source_id: string;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @OneToMany(() => Advert, (advert) => advert.upload)
  advert: Advert[];

  @OneToMany(() => Brand, (brand) => brand.upload)
  brand: Brand[];

  @OneToMany(() => Category, (category) => category.upload)
  category: Category[];
}