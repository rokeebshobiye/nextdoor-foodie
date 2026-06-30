import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("reviews")
export class Review {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  promo_id: number;

  @Column({ type: "int" })
  user_id: number;

  @Column({ type: "int" })
  rating: number;

  @Column({ type: "text" })
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}