import { Module } from "@nestjs/common";
import { AnalyticsEventController } from "./analytics_events.controller";
import { AnalyticsEventService } from "./analytics_events.service";


@Module({
  controllers: [AnalyticsEventController],
  providers: [AnalyticsEventService],
  exports: [AnalyticsEventService],
})
export class AnalyticsEventModule {}