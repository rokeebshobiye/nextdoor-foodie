import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("email_verifications")
export class EmailVerification {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  type: string;

  @Column({ type: "varchar" })
  code: string;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "date" })
  verified_at: Date;

  @Column({ type: "date" })
  expired_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}