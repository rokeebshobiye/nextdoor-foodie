import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateUserSettingDto {
  @IsInt()
  id: number;

  @IsInt()
  user_id: number;

  @IsString()
  language: string;

  @IsInt()
  push_notifications: number;

  @IsInt()
  email_notifications: number;

  @IsInt()
  location_access: number;

  @IsInt()
  weekly_promo_drop_alert: number;

  @IsInt()
  brand_ad_hoc_notification: number;

  @IsDateString()
  deleted_at: Date;

  @IsInt()
  auto_sync_location: number;

  @IsInt()
  use_face_id: number;

  @IsInt()
  use_fingerprint_id: number;
}