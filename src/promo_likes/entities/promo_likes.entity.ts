import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Entity("promo_likes")
export class PromoLike {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  promo_id: number;

  @Column({ type: "int" })
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => User, (user => user.promo_likes))
  user: User;
}