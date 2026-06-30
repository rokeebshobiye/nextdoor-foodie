import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateAuthDto {
  @IsInt()
  id: number;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  provider_user_id: string;

  @IsString()
  status: string;

  @IsInt()
  is_email_verified: number;

  @IsDateString()
  deleted_at: Date;
}