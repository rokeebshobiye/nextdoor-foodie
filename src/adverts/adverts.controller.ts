import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { AdvertService } from "./adverts.service";
import { CreateAdvertDto } from "./dto/create-adverts.dto";
import { UpdateAdvertDto } from "./dto/update-adverts.dto";

@Controller("adverts")
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.advertService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.advertService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateAdvertDto) {
    return this.advertService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateAdvertDto) {
    return this.advertService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.advertService.remove(id);
  }
}