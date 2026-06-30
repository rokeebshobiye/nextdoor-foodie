import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("analytics_events")
export class AnalyticsEvent {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  event_type: string;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  promo_id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  admin_id: number;

  @Column({ type: "int" })
  review_id: number;

  @Column({ type: "varchar" })
  session_id: string;

  @Column({ type: "int" })
  payout_id: number;

  @Column({ type: "decimal" })
  value: number;

  @Column({ type: "int" })
  count: number;

  @Column({ type: "jsonb" })
  meta_data: Record<string, unknown>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}