import { IsInt, IsString, IsDateString } from "class-validator";

export class CreateCategoryDto {
  @IsInt()
  id: number;

  @IsInt()
  image_id: number;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsDateString()
  deleted_at: Date;
}