import { PartialType } from "@nestjs/mapped-types";
import { CreatePromoAnalyticDto } from "./create-promo_analytics.dto";

export class UpdatePromoAnalyticDto extends PartialType(CreatePromoAnalyticDto) {}