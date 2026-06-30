import { IsInt, IsString, IsNumber, IsDateString } from "class-validator";

export class CreateLocationDto {
  @IsInt()
  id: number;

  @IsInt()
  brand_id: number;

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsDateString()
  deleted_at: Date;
}