import { Module } from "@nestjs/common";
import { SystemSettingController } from "./system_settings.controller";
import { SystemSettingService } from "./system_settings.service";


@Module({
  controllers: [SystemSettingController],
  providers: [SystemSettingService],
  exports: [SystemSettingService],
})
export class SystemSettingModule {}