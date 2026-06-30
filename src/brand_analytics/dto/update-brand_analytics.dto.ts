import { PartialType } from "@nestjs/mapped-types";
import { CreateBrandAnalyticDto } from "./create-brand_analytics.dto";

export class UpdateBrandAnalyticDto extends PartialType(CreateBrandAnalyticDto) {}