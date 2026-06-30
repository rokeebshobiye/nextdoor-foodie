import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Upload } from "../../uploads/entities/uploads.entity";
import { BrandAnalytic } from "../../brand_analytics/entities/brand_analytics.entity";
import { Event } from "../../events/entities/events.entity";
import { Location } from "../../locations/entities/locations.entity";
import { Promo } from "../../promos/entities/promos.entity";
import { Reservation } from "../../reservations/entities/reservations.entity";

@Entity("brands")
export class Brand {
  @Column({ type: "int" })
  id: number;

  @Column({ type: "int" })
  logo_id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar" })
  category: string;

  @Column({ type: "varchar" })
  phone_number: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  country: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "int" })
  is_verified: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "date" })
  deleted_at: Date;
  @ManyToOne(() => Upload, (upload => upload.brands))
  upload: Upload;

  @OneToMany(() => BrandAnalytic, (brandAnalytic) => brandAnalytic.brand)
  brandAnalytic: BrandAnalytic[];

  @OneToMany(() => Event, (event) => event.brand)
  event: Event[];

  @OneToMany(() => Location, (location) => location.brand)
  location: Location[];

  @OneToMany(() => Promo, (promo) => promo.brand)
  promo: Promo[];

  @OneToMany(() => Reservation, (reservation) => reservation.brand)
  reservation: Reservation[];
}