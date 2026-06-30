import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PromoAnalyticService } from "./promo_analytics.service";
import { CreatePromoAnalyticDto } from "./dto/create-promo_analytics.dto";
import { UpdatePromoAnalyticDto } from "./dto/update-promo_analytics.dto";

@Controller("promo_analytics")
export class PromoAnalyticController {
  constructor(private readonly promoAnalyticService: PromoAnalyticService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoAnalyticService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoAnalyticService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePromoAnalyticDto) {
    return this.promoAnalyticService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePromoAnalyticDto) {
    return this.promoAnalyticService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.promoAnalyticService.remove(id);
  }
}