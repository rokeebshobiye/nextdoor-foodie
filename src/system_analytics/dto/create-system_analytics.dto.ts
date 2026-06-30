import { IsInt, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateSystemAnalyticDto {
  @IsInt()
  id: number;

  @IsDateString()
  date: Date;

  @IsInt()
  total_users: number;

  @IsInt()
  daily_avg_users: number;

  @IsInt()
  new_users: number;

  @IsNumber()
  avg_session_minutes: number;

  @IsString()
  most_popular_location: string;

  @IsString()
  top_user_actions: Record<string, unknown>;

  @IsString()
  top_locations: Record<string, unknown>;

  @IsInt()
  active_brands: number;

  @IsInt()
  pending_brands: number;

  @IsInt()
  flagged_brands: number;

  @IsInt()
  active_promos: number;

  @IsInt()
  pending_promos: number;

  @IsInt()
  flagged_promos: number;

  @IsInt()
  rejected_promos: number;

  @IsInt()
  impressions: number;

  @IsInt()
  redemptions: number;

  @IsNumber()
  revenue: number;

  @IsNumber()
  commission: number;

  @IsNumber()
  pending_payouts: number;

  @IsNumber()
  completed_payouts: number;

  @IsDateString()
  deleted_at: Date;
}