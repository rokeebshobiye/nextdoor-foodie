import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { NotificationService } from "./notifications.service";
import { CreateNotificationDto } from "./dto/create-notifications.dto";
import { UpdateNotificationDto } from "./dto/update-notifications.dto";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.notificationService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.notificationService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateNotificationDto) {
    return this.notificationService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateNotificationDto) {
    return this.notificationService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.notificationService.remove(id);
  }
}