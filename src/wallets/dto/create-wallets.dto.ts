import { IsInt, IsNumber, IsDateString } from "class-validator";

export class CreateWalletDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsNumber()
  balance: number;

  @IsNumber()
  ledger: number;

  @IsDateString()
  deleted_at: Date;
}