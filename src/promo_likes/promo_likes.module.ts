import { Module } from "@nestjs/common";
import { PromoLikeController } from "./promo_likes.controller";
import { PromoLikeService } from "./promo_likes.service";


@Module({
  controllers: [PromoLikeController],
  providers: [PromoLikeService],
  exports: [PromoLikeService],
})
export class PromoLikeModule {}