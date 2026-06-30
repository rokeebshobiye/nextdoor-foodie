import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { AdminRole } from "../../admin_roles/entities/admin_roles.entity";

@Entity("roles")
export class Role {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "jsonb" })
  permissions: Record<string, unknown>;

  @Column({ type: "int" })
  owner_id: number;

  @Column({ type: "varchar" })
  owner_type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @OneToMany(() => AdminRole, (adminRole) => adminRole.role)
  adminRole: AdminRole[];
}