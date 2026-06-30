import { IsInt, IsString, IsDateString } from "class-validator";

export class CreatePayoutAccountDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsString()
  bank_code: string;

  @IsString()
  account_name: string;

  @IsString()
  account_number: string;

  @IsInt()
  is_primary: number;

  @IsDateString()
  deleted_at: Date;
}