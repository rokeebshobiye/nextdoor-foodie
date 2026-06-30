import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Entity("user_roles")
export class UserRole {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  brand_id: number;

  @Column({ type: "int" })
  role_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => User, (user => user.user_roles))
  user: User;
}