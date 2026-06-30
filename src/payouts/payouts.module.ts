import { Module } from "@nestjs/common";
import { PayoutController } from "./payouts.controller";
import { PayoutService } from "./payouts.service";


@Module({
  controllers: [PayoutController],
  providers: [PayoutService],
  exports: [PayoutService],
})
export class PayoutModule {}