import { IsInt, IsString, IsDateString } from "class-validator";

export class CreatePermissionDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  scope: string;

  @IsString()
  http_method: string;

  @IsString()
  http_path: string;

  @IsDateString()
  deleted_at: Date;
}