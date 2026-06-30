import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { SystemAnalyticService } from "./system_analytics.service";
import { CreateSystemAnalyticDto } from "./dto/create-system_analytics.dto";
import { UpdateSystemAnalyticDto } from "./dto/update-system_analytics.dto";

@Controller("system_analytics")
export class SystemAnalyticController {
  constructor(private readonly systemAnalyticService: SystemAnalyticService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.systemAnalyticService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.systemAnalyticService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateSystemAnalyticDto) {
    return this.systemAnalyticService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSystemAnalyticDto) {
    return this.systemAnalyticService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.systemAnalyticService.remove(id);
  }
}