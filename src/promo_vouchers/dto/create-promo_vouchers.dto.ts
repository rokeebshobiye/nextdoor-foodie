import { IsInt, IsDateString, IsString } from "class-validator";

export class CreatePromoVoucherDto {
  @IsInt()
  id: number;

  @IsInt()
  order_id: number;

  @IsInt()
  location_id: number;

  @IsInt()
  handler_id: number;

  @IsDateString()
  expires_at: Date;

  @IsDateString()
  redeemed_at: Date;

  @IsDateString()
  deleted_at: Date;

  @IsString()
  status: string;

  @IsString()
  code: string;

  @IsInt()
  brand_id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  promo_id: number;
}