import { Module } from "@nestjs/common";
import { UserRoleController } from "./user_roles.controller";
import { UserRoleService } from "./user_roles.service";


@Module({
  controllers: [UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService],
})
export class UserRoleModule {}