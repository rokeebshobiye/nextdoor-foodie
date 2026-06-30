import { Module } from "@nestjs/common";
import { EmailVerificationController } from "./email_verifications.controller";
import { EmailVerificationService } from "./email_verifications.service";


@Module({
  controllers: [EmailVerificationController],
  providers: [EmailVerificationService],
  exports: [EmailVerificationService],
})
export class EmailVerificationModule {}