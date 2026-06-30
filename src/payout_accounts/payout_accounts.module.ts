import { Module } from "@nestjs/common";
import { PayoutAccountController } from "./payout_accounts.controller";
import { PayoutAccountService } from "./payout_accounts.service";


@Module({
  controllers: [PayoutAccountController],
  providers: [PayoutAccountService],
  exports: [PayoutAccountService],
})
export class PayoutAccountModule {}