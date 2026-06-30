import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Administrator } from "../../administrators/entities/administrators.entity";
import { User } from "../../users/entities/users.entity";

@Entity("auths")
export class Auth {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  provider_user_id: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "int" })
  is_email_verified: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @OneToMany(() => Administrator, (administrator) => administrator.auth)
  administrator: Administrator[];

  @OneToMany(() => User, (user) => user.auth)
  user: User[];
}