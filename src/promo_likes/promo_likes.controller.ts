import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PromoLikeService } from "./promo_likes.service";
import { CreatePromoLikeDto } from "./dto/create-promo_likes.dto";
import { UpdatePromoLikeDto } from "./dto/update-promo_likes.dto";

@Controller("promo_likes")
export class PromoLikeController {
  constructor(private readonly promoLikeService: PromoLikeService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoLikeService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.promoLikeService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePromoLikeDto) {
    return this.promoLikeService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePromoLikeDto) {
    return this.promoLikeService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.promoLikeService.remove(id);
  }
}