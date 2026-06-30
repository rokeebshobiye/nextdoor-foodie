import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PromoVoucherService } from "./promo_vouchers.service";
import { CreatePromoVoucherDto } from "./dto/create-promo_vouchers.dto";
import { UpdatePromoVoucherDto } from "./dto/update-promo_vouchers.dto";

@Controller("promo_vouchers")
export class PromoVoucherController {
  constructor(private readonly promoVoucherService: PromoVoucherService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoVoucherService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoVoucherService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePromoVoucherDto) {
    return this.promoVoucherService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePromoVoucherDto) {
    return this.promoVoucherService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.promoVoucherService.remove(id);
  }
}