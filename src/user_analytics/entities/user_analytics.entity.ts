import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Entity("user_analytics")
export class UserAnalytic {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  saved_promos: number;

  @Column({ type: "int" })
  redeemed_promos: number;

  @Column({ type: "int" })
  feedback_given: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => User, (user => user.user_analytics))
  user: User;
}