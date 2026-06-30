import { Module } from "@nestjs/common";
import { ReviewController } from "./reviews.controller";
import { ReviewService } from "./reviews.service";


@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}