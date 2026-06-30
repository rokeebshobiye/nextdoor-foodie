import { IsInt, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateAnalyticsEventDto {
  @IsInt()
  id: number;

  @IsString()
  event_type: string;

  @IsInt()
  brand_id: number;

  @IsInt()
  promo_id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  admin_id: number;

  @IsInt()
  review_id: number;

  @IsString()
  session_id: string;

  @IsInt()
  payout_id: number;

  @IsNumber()
  value: number;

  @IsInt()
  count: number;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsDateString()
  deleted_at: Date;
}