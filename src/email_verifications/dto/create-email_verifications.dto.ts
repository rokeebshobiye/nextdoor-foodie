import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateEmailVerificationDto {
  @IsInt()
  id: number;

  @IsString()
  email: string;

  @IsString()
  type: string;

  @IsString()
  code: string;

  @IsInt()
  user_id: number;

  @IsDateString()
  verified_at: Date;

  @IsDateString()
  expired_at: Date;

  @IsDateString()
  deleted_at: Date;
}