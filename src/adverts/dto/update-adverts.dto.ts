import { PartialType } from "@nestjs/mapped-types";
import { CreateAdvertDto } from "./create-adverts.dto";

export class UpdateAdvertDto extends PartialType(CreateAdvertDto) {}