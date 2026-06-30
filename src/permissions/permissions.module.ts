import { Module } from "@nestjs/common";
import { PermissionController } from "./permissions.controller";
import { PermissionService } from "./permissions.service";


@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}