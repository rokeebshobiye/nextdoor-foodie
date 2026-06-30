import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateNotificationDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsInt()
  owner_id: number;

  @IsString()
  owner_type: string;

  @IsInt()
  source_id: number;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsDateString()
  read_at: Date;

  @IsDateString()
  deleted_at: Date;
}