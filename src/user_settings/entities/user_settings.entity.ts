import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Entity("user_settings")
export class UserSetting {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "varchar" })
  language: string;

  @Column({ type: "int" })
  push_notifications: number;

  @Column({ type: "int" })
  email_notifications: number;

  @Column({ type: "int" })
  location_access: number;

  @Column({ type: "int" })
  weekly_promo_drop_alert: number;

  @Column({ type: "int" })
  brand_ad_hoc_notification: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "int" })
  auto_sync_location: number;

  @Column({ type: "int" })
  use_face_id: number;

  @Column({ type: "int" })
  use_fingerprint_id: number;
  @ManyToOne(() => User, (user => user.user_settings))
  user: User;
}