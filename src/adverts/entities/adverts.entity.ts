import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Upload } from "../../uploads/entities/uploads.entity";

@Entity("adverts")
export class Advert {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  banner_id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  headline: string;

  @Column({ type: "jsonb" })
  cta: Record<string, unknown>;

  @Column({ type: "int" })
  sort_order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "varchar" })
  background: string;

  @Column({ type: "varchar" })
  start_date: string;

  @Column({ type: "varchar" })
  end_date: string;
  @ManyToOne(() => Upload, (upload => upload.adverts))
  upload: Upload;
}