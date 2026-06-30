import { Module } from "@nestjs/common";
import { BrandAnalyticController } from "./brand_analytics.controller";
import { BrandAnalyticService } from "./brand_analytics.service";


@Module({
  controllers: [BrandAnalyticController],
  providers: [BrandAnalyticService],
  exports: [BrandAnalyticService],
})
export class BrandAnalyticModule {}