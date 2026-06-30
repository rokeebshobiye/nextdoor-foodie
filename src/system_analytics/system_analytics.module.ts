import { Module } from "@nestjs/common";
import { SystemAnalyticController } from "./system_analytics.controller";
import { SystemAnalyticService } from "./system_analytics.service";


@Module({
  controllers: [SystemAnalyticController],
  providers: [SystemAnalyticService],
  exports: [SystemAnalyticService],
})
export class SystemAnalyticModule {}