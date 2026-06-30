import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateSystemSettingDto {
  @IsInt()
  id: number;

  @IsString()
  key: string;

  @IsString()
  value: string;

  @IsDateString()
  deleted_at: Date;
}