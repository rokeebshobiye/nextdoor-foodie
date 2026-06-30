import { PartialType } from "@nestjs/mapped-types";
import { CreateAnalyticsEventDto } from "./create-analytics_events.dto";

export class UpdateAnalyticsEventDto extends PartialType(CreateAnalyticsEventDto) {}