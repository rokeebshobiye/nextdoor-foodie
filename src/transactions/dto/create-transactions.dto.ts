import { IsInt, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateTransactionDto {
  @IsInt()
  id: number;

  @IsString()
  reference: string;

  @IsNumber()
  amount: number;

  @IsString()
  status: string;

  @IsInt()
  brand_id: number;

  @IsString()
  currency_code: string;

  @IsString()
  payment_provider: string;

  @IsString()
  payment_method: string;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsDateString()
  deleted_at: Date;
}