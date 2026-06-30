import { Module } from "@nestjs/common";
import { UserAnalyticController } from "./user_analytics.controller";
import { UserAnalyticService } from "./user_analytics.service";


@Module({
  controllers: [UserAnalyticController],
  providers: [UserAnalyticService],
  exports: [UserAnalyticService],
})
export class UserAnalyticModule {}