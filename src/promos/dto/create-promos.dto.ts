import { IsInt, IsString, IsNumber, IsDateString } from "class-validator";

export class CreatePromoDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsInt()
  image_id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  terms: string;

  @IsString()
  locations: Record<string, unknown>;

  @IsNumber()
  avg_rating: number;

  @IsInt()
  reviews_count: number;

  @IsInt()
  redemptions_count: number;

  @IsString()
  eligibility: string;

  @IsDateString()
  start_date: Date;

  @IsInt()
  likes_count: number;

  @IsDateString()
  end_date: Date;

  @IsString()
  status: string;

  @IsDateString()
  deleted_at: Date;

  @IsString()
  slug: string;
}