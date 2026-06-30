import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateEventDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsInt()
  image_id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsInt()
  max_attendees: number;

  @IsString()
  time: string;

  @IsString()
  status: string;

  @IsDateString()
  deleted_at: Date;

  @IsInt()
  price: number;

  @IsString()
  slug: string;

  @IsString()
  date: string;
}