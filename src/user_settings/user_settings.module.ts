import { Module } from "@nestjs/common";
import { UserSettingController } from "./user_settings.controller";
import { UserSettingService } from "./user_settings.service";


@Module({
  controllers: [UserSettingController],
  providers: [UserSettingService],
  exports: [UserSettingService],
})
export class UserSettingModule {}