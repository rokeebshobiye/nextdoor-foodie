import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { SystemSettingService } from "./system_settings.service";
import { CreateSystemSettingDto } from "./dto/create-system_settings.dto";
import { UpdateSystemSettingDto } from "./dto/update-system_settings.dto";

@Controller("system_settings")
export class SystemSettingController {
  constructor(private readonly systemSettingService: SystemSettingService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.systemSettingService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.systemSettingService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateSystemSettingDto) {
    return this.systemSettingService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSystemSettingDto) {
    return this.systemSettingService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.systemSettingService.remove(id);
  }
}