import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateSubscriptionPlanDto {
  @IsInt()
  id: number;

  @IsString()
  billingInterval: string;

  @IsString()
  currencyCode: string;

  @IsInt()
  price: number;

  @IsString()
  package: string;

  @IsString()
  description: string;

  @IsString()
  features: Record<string, unknown>;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

  @IsDateString()
  deletedAt: Date;
}