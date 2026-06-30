import { IsInt, IsDateString, IsNumber } from "class-validator";

export class CreateBrandAnalyticDto {
  @IsInt()
  id: number;

  @IsDateString()
  date: Date;

  @IsInt()
  brand_id: number;

  @IsInt()
  promos_created: number;

  @IsInt()
  impressions: number;

  @IsInt()
  redemptions: number;

  @IsInt()
  active_customers: number;

  @IsNumber()
  revenue: number;

  @IsDateString()
  deleted_at: Date;

  @IsNumber()
  platform_commission: number;
}