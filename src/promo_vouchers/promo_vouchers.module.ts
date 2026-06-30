import { Module } from "@nestjs/common";
import { PromoVoucherController } from "./promo_vouchers.controller";
import { PromoVoucherService } from "./promo_vouchers.service";


@Module({
  controllers: [PromoVoucherController],
  providers: [PromoVoucherService],
  exports: [PromoVoucherService],
})
export class PromoVoucherModule {}