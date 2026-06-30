import { Module } from "@nestjs/common";
import { AdminRoleController } from "./admin_roles.controller";
import { AdminRoleService } from "./admin_roles.service";


@Module({
  controllers: [AdminRoleController],
  providers: [AdminRoleService],
  exports: [AdminRoleService],
})
export class AdminRoleModule {}