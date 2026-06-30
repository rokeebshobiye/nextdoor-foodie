import { Module } from "@nestjs/common";
import { AdvertController } from "./adverts.controller";
import { AdvertService } from "./adverts.service";


@Module({
  controllers: [AdvertController],
  providers: [AdvertService],
  exports: [AdvertService],
})
export class AdvertModule {}