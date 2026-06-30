import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateDeviceDto {
  @IsInt()
  id: number;

  @IsInt()
  owner_id: number;

  @IsString()
  owner_type: string;

  @IsString()
  device_name: string;

  @IsString()
  fingerprint: string;

  @IsString()
  device_token: string;

  @IsString()
  device_type: string;

  @IsInt()
  notification_enabled: number;

  @IsString()
  operating_system: string;

  @IsString()
  meta_data: Record<string, unknown>;

  @IsString()
  status: string;

  @IsDateString()
  last_login_at: Date;

  @IsString()
  device_id: string;
}