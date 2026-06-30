import { IsInt, IsDateString } from "class-validator";

export class CreateUserAnalyticDto {
  @IsInt()
  id: number;

  @IsDateString()
  date: Date;

  @IsInt()
  user_id: number;

  @IsInt()
  saved_promos: number;

  @IsInt()
  redeemed_promos: number;

  @IsInt()
  feedback_given: number;

  @IsDateString()
  deleted_at: Date;
}