import { Module } from "@nestjs/common";
import { SubscriptionPlanController } from "./subscription_plans.controller";
import { SubscriptionPlanService } from "./subscription_plans.service";


@Module({
  controllers: [SubscriptionPlanController],
  providers: [SubscriptionPlanService],
  exports: [SubscriptionPlanService],
})
export class SubscriptionPlanModule {}