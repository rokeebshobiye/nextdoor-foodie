import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateRoleDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  slug: string;

  @IsString()
  permissions: Record<string, unknown>;

  @IsInt()
  owner_id: number;

  @IsString()
  owner_type: string;

  @IsDateString()
  deleted_at: Date;
}