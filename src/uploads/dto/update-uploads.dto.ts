import { PartialType } from "@nestjs/mapped-types";
import { CreateUploadDto } from "./create-uploads.dto";

export class UpdateUploadDto extends PartialType(CreateUploadDto) {}