import { PartialType } from "@nestjs/mapped-types";
import { CreateSystemAnalyticDto } from "./create-system_analytics.dto";

export class UpdateSystemAnalyticDto extends PartialType(CreateSystemAnalyticDto) {}