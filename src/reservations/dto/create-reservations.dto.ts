import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateReservationDto {
  @IsInt()
  id: number;

  @IsInt()
  event_id: number;

  @IsInt()
  brand_id: number;

  @IsInt()
  user_id: number;

  @IsString()
  code: string;

  @IsString()
  status: string;

  @IsDateString()
  deleted_at: Date;

  @IsInt()
  order_id: number;
}