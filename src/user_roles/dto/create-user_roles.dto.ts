import { IsInt, IsDateString } from "class-validator";

export class CreateUserRoleDto {
  @IsInt()
  id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  brand_id: number;

  @IsInt()
  role_id: number;

  @IsDateString()
  deleted_at: Date;
}