import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PromoService } from "./promos.service";
import { CreatePromoDto } from "./dto/create-promos.dto";
import { UpdatePromoDto } from "./dto/update-promos.dto";

@Controller("promos")
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePromoDto) {
    return this.promoService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePromoDto) {
    return this.promoService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.promoService.remove(id);
  }
}