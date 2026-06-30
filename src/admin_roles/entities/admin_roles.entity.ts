import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Role } from "../../roles/entities/roles.entity";

@Entity("admin_roles")
export class AdminRole {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  admin_id: number;

  @Column({ type: "int" })
  role_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => Role, (role => role.admin_roles))
  role: Role;
}