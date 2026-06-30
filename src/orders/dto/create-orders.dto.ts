import { IsInt, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateOrderDto {
  @IsInt()
  id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  item_id: number;

  @IsString()
  item_type: string;

  @IsInt()
  transaction_id: number;

  @IsNumber()
  amount: number;

  @IsString()
  status: string;

  @IsDateString()
  deleted_at: Date;

  @IsInt()
  brand_id: number;
}