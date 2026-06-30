import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { BrandAnalyticService } from "./brand_analytics.service";
import { CreateBrandAnalyticDto } from "./dto/create-brand_analytics.dto";
import { UpdateBrandAnalyticDto } from "./dto/update-brand_analytics.dto";

@Controller("brand_analytics")
export class BrandAnalyticController {
  constructor(private readonly brandAnalyticService: BrandAnalyticService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.brandAnalyticService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.brandAnalyticService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateBrandAnalyticDto) {
    return this.brandAnalyticService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateBrandAnalyticDto) {
    return this.brandAnalyticService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.brandAnalyticService.remove(id);
  }
}