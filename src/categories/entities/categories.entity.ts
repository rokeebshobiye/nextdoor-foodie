import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Upload } from "../../uploads/entities/uploads.entity";

@Entity("categories")
export class Category {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  image_id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => Upload, (upload => upload.categories))
  upload: Upload;
}