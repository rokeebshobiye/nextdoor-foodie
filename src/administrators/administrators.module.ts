import { Module } from "@nestjs/common";
import { AdministratorController } from "./administrators.controller";
import { AdministratorService } from "./administrators.service";


@Module({
  controllers: [AdministratorController],
  providers: [AdministratorService],
  exports: [AdministratorService],
})
export class AdministratorModule {}