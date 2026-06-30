import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { UserAnalyticService } from "./user_analytics.service";
import { CreateUserAnalyticDto } from "./dto/create-user_analytics.dto";
import { UpdateUserAnalyticDto } from "./dto/update-user_analytics.dto";

@Controller("user_analytics")
export class UserAnalyticController {
  constructor(private readonly userAnalyticService: UserAnalyticService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userAnalyticService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userAnalyticService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateUserAnalyticDto) {
    return this.userAnalyticService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserAnalyticDto) {
    return this.userAnalyticService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userAnalyticService.remove(id);
  }
}