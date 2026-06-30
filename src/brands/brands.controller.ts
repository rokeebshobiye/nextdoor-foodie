import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { BrandService } from "./brands.service";
import { CreateBrandDto } from "./dto/create-brands.dto";
import { UpdateBrandDto } from "./dto/update-brands.dto";

@Controller("brands")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.brandService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.brandService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateBrandDto) {
    return this.brandService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateBrandDto) {
    return this.brandService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.brandService.remove(id);
  }
}