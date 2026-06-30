import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PromoLike } from "../../promo_likes/entities/promo_likes.entity";
import { UserAnalytic } from "../../user_analytics/entities/user_analytics.entity";
import { UserRole } from "../../user_roles/entities/user_roles.entity";
import { UserSetting } from "../../user_settings/entities/user_settings.entity";

@Entity("users")
export class User {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  auth_id: number;

  @Column({ type: "int" })
  avatar_id: number;

  @Column({ type: "varchar" })
  first_name: string;

  @Column({ type: "varchar" })
  last_name: string;

  @Column({ type: "varchar" })
  other_name: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;

  @Column({ type: "varchar" })
  phone_number: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "int" })
  location: number;
  @OneToMany(() => PromoLike, (promoLike) => promoLike.user)
  promoLike: PromoLike[];

  @OneToMany(() => UserAnalytic, (userAnalytic) => userAnalytic.user)
  userAnalytic: UserAnalytic[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRole: UserRole[];

  @OneToMany(() => UserSetting, (userSetting) => userSetting.user)
  userSetting: UserSetting[];
}