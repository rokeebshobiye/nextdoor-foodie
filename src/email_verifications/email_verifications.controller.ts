import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { EmailVerificationService } from "./email_verifications.service";
import { CreateEmailVerificationDto } from "./dto/create-email_verifications.dto";
import { UpdateEmailVerificationDto } from "./dto/update-email_verifications.dto";

@Controller("email_verifications")
export class EmailVerificationController {
  constructor(private readonly emailVerificationService: EmailVerificationService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.emailVerificationService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.emailVerificationService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateEmailVerificationDto) {
    return this.emailVerificationService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateEmailVerificationDto) {
    return this.emailVerificationService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.emailVerificationService.remove(id);
  }
}