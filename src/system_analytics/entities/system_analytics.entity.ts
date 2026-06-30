import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("system_analytics")
export class SystemAnalytic {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "int" })
  total_users: number;

  @Column({ type: "int" })
  daily_avg_users: number;

  @Column({ type: "int" })
  new_users: number;

  @Column({ type: "decimal" })
  avg_session_minutes: number;

  @Column({ type: "varchar" })
  most_popular_location: string;

  @Column({ type: "jsonb" })
  top_user_actions: Record<string, unknown>;

  @Column({ type: "jsonb" })
  top_locations: Record<string, unknown>;

  @Column({ type: "int" })
  active_brands: number;

  @Column({ type: "int" })
  pending_brands: number;

  @Column({ type: "int" })
  flagged_brands: number;

  @Column({ type: "int" })
  active_promos: number;

  @Column({ type: "int" })
  pending_promos: number;

  @Column({ type: "int" })
  flagged_promos: number;

  @Column({ type: "int" })
  rejected_promos: number;

  @Column({ type: "int" })
  impressions: number;

  @Column({ type: "int" })
  redemptions: number;

  @Column({ type: "decimal" })
  revenue: number;

  @Column({ type: "decimal" })
  commission: number;

  @Column({ type: "decimal" })
  pending_payouts: number;

  @Column({ type: "decimal" })
  completed_payouts: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}