import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { SubscriptionPlan } from "../../subscription_plans/entities/subscription_plans.entity";

@Entity("subscriptions")
export class Subscription {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  subscription_plan_id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "varchar" })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "varchar" })
  start_date: string;

  @Column({ type: "varchar" })
  end_date: string;
  @ManyToOne(() => SubscriptionPlan, (subscriptionPlan => subscriptionPlan.subscriptions))
  subscriptionPlan: SubscriptionPlan;
}