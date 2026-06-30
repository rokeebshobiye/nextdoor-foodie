import { Module } from "@nestjs/common";
import { PromoController } from "./promos.controller";
import { PromoService } from "./promos.service";


@Module({
  controllers: [PromoController],
  providers: [PromoService],
  exports: [PromoService],
})
export class PromoModule {}