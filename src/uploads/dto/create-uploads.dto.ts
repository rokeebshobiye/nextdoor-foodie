import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateUploadDto {
  @IsInt()
  id: number;

  @IsString()
  url: string;

  @IsString()
  provider: string;

  @IsString()
  source_id: string;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsDateString()
  deleted_at: Date;
}