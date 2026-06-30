import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Subscription } from "../../subscriptions/entities/subscriptions.entity";

@Entity("subscription_plans")
export class SubscriptionPlan {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  billingInterval: string;

  @Column({ type: "varchar" })
  currencyCode: string;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "varchar" })
  package: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "jsonb" })
  features: Record<string, unknown>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: "date" })
  deletedAt: Date;
  @OneToMany(() => Subscription, (subscription) => subscription.subscriptionPlan)
  subscription: Subscription[];
}