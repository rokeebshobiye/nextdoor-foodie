import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { AnalyticsEventService } from "./analytics_events.service";
import { CreateAnalyticsEventDto } from "./dto/create-analytics_events.dto";
import { UpdateAnalyticsEventDto } from "./dto/update-analytics_events.dto";

@Controller("analytics_events")
export class AnalyticsEventController {
  constructor(private readonly analyticsEventService: AnalyticsEventService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.analyticsEventService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.analyticsEventService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateAnalyticsEventDto) {
    return this.analyticsEventService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateAnalyticsEventDto) {
    return this.analyticsEventService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.analyticsEventService.remove(id);
  }
}