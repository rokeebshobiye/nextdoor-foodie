import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateReviewDto {
  @IsInt()
  id: number;

  @IsInt()
  promo_id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  rating: number;

  @IsString()
  comment: string;

  @IsDateString()
  deleted_at: Date;
}