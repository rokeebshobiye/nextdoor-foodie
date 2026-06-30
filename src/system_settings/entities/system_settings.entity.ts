import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("system_settings")
export class SystemSetting {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  key: string;

  @Column({ type: "text" })
  value: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}