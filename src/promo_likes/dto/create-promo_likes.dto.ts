import { IsInt, IsDateString } from "class-validator";

export class CreatePromoLikeDto {
  @IsInt()
  id: number;

  @IsInt()
  promo_id: number;

  @IsInt()
  user_id: number;

  @IsDateString()
  deleted_at: Date;
}