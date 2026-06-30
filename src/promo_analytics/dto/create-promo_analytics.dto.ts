import { IsInt, IsDateString, IsNumber } from "class-validator";

export class CreatePromoAnalyticDto {
  @IsInt()
  id: number;

  @IsDateString()
  date: Date;

  @IsInt()
  brand_id: number;

  @IsInt()
  promo_id: number;

  @IsInt()
  impressions: number;

  @IsInt()
  clicks: number;

  @IsInt()
  favorites: number;

  @IsInt()
  redemptions: number;

  @IsInt()
  active_customers: number;

  @IsInt()
  reviews_count: number;

  @IsNumber()
  avg_rating: number;

  @IsNumber()
  revenue: number;

  @IsDateString()
  deleted_at: Date;
}