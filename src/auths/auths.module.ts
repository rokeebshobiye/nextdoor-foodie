import { Module } from "@nestjs/common";
import { AuthController } from "./auths.controller";
import { AuthService } from "./auths.service";


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}