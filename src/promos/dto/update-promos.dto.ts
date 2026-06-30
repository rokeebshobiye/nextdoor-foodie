import { PartialType } from "@nestjs/mapped-types";
import { CreatePromoDto } from "./create-promos.dto";

export class UpdatePromoDto extends PartialType(CreatePromoDto) {}