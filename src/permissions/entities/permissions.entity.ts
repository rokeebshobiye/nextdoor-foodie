import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("permissions")
export class Permission {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  scope: string;

  @Column({ type: "varchar" })
  http_method: string;

  @Column({ type: "varchar" })
  http_path: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}