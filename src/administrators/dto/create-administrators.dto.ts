import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateAdministratorDto {
  @IsInt()
  id: number;

  @IsInt()
  roleId: number;

  @IsInt()
  authId: number;

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

  @IsInt()
  role_id: number;

  @IsInt()
  auth_id: number;

  @IsString()
  profile_picture: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  other_name: string;

  @IsString()
  phone_number: string;

  @IsDateString()
  deleted_at: Date;
}