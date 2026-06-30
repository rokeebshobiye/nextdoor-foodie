import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { UserSettingService } from "./user_settings.service";
import { CreateUserSettingDto } from "./dto/create-user_settings.dto";
import { UpdateUserSettingDto } from "./dto/update-user_settings.dto";

@Controller("user_settings")
export class UserSettingController {
  constructor(private readonly userSettingService: UserSettingService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userSettingService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userSettingService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateUserSettingDto) {
    return this.userSettingService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserSettingDto) {
    return this.userSettingService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userSettingService.remove(id);
  }
}