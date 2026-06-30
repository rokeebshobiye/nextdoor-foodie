import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsInt()
  auth_id: number;

  @IsInt()
  avatar_id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  other_name: string;

  @IsString()
  gender: string;

  @IsString()
  dob: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsDateString()
  deleted_at: Date;

  @IsString()
  phone_number: string;

  @IsString()
  state: string;

  @IsInt()
  location: number;
}