import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("notifications")
export class Notification {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  content: string;

  @Column({ type: "int" })
  owner_id: number;

  @Column({ type: "varchar" })
  owner_type: string;

  @Column({ type: "int" })
  source_id: number;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @Column({ type: "date" })
  read_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}