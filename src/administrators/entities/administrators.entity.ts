import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("administrators")
export class Administrator {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  roleId: number;

  @Column({ type: "int" })
  authId: number;

  @Column({ type: "varchar" })
  gender: string;

  @Column({ type: "varchar" })
  dob: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  country: string;

  @Column({ type: "int" })
  role_id: number;

  @Column({ type: "int" })
  auth_id: number;

  @Column({ type: "varchar" })
  profile_picture: string;

  @Column({ type: "varchar" })
  first_name: string;

  @Column({ type: "varchar" })
  last_name: string;

  @Column({ type: "varchar" })
  other_name: string;

  @Column({ type: "varchar" })
  phone_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

}