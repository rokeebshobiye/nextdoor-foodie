import { IsInt, IsDateString } from "class-validator";

export class CreateAdminRoleDto {
  @IsInt()
  id: number;

  @IsInt()
  admin_id: number;

  @IsInt()
  role_id: number;

  @IsDateString()
  deleted_at: Date;
}