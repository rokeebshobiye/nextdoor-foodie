import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateAdvertDto {
  @IsInt()
  id: number;

  @IsInt()
  banner_id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  headline: string;

  @IsString()
  cta: Record<string, unknown>;

  @IsInt()
  sort_order: number;

  @IsDateString()
  deleted_at: Date;

  @IsString()
  background: string;

  @IsString()
  start_date: string;

  @IsString()
  end_date: string;
}