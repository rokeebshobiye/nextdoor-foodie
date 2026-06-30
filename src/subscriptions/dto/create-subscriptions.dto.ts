import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateSubscriptionDto {
  @IsInt()
  id: number;

  @IsInt()
  subscription_plan_id: number;

  @IsInt()
  brand_id: number;

  @IsString()
  status: string;

  @IsDateString()
  deleted_at: Date;

  @IsString()
  start_date: string;

  @IsString()
  end_date: string;
}