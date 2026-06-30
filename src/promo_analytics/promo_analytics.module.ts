import { Module } from "@nestjs/common";
import { PromoAnalyticController } from "./promo_analytics.controller";
import { PromoAnalyticService } from "./promo_analytics.service";


@Module({
  controllers: [PromoAnalyticController],
  providers: [PromoAnalyticService],
  exports: [PromoAnalyticService],
})
export class PromoAnalyticModule {}