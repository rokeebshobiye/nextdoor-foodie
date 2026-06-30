import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("devices")
export class Device {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  owner_id: number;

  @Column({ type: "varchar" })
  owner_type: string;

  @Column({ type: "varchar" })
  device_name: string;

  @Column({ type: "text" })
  fingerprint: string;

  @Column({ type: "text" })
  device_token: string;

  @Column({ type: "text" })
  device_type: string;

  @Column({ type: "int" })
  notification_enabled: number;

  @Column({ type: "varchar" })
  operating_system: string;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "timestamp" })
  last_login_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "varchar" })
  device_id: string;

}