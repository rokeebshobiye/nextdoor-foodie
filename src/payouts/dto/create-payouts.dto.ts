import { IsInt, IsNumber, IsString, IsDateString } from "class-validator";

export class CreatePayoutDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsInt()
  payout_account_id: number;

  @IsNumber()
  amount: number;

  @IsString()
  status: string;

  @IsString()
  method: string;

  @IsString()
  reference: string;

  @IsNumber()
  fee: number;

  @IsDateString()
  initiated_at: Date;

  @IsDateString()
  processed_at: Date;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsDateString()
  deleted_at: Date;
}