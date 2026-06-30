import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateBrandDto {
  @IsInt()
  id: number;

  @IsInt()
  logo_id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  phone_number: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  slug: string;

  @IsInt()
  is_verified: number;

  @IsDateString()
  deleted_at: Date;
}