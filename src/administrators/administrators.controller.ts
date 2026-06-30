import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { AdministratorService } from "./administrators.service";
import { CreateAdministratorDto } from "./dto/create-administrators.dto";
import { UpdateAdministratorDto } from "./dto/update-administrators.dto";

@Controller("administrators")
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.administratorService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.administratorService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateAdministratorDto) {
    return this.administratorService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateAdministratorDto) {
    return this.administratorService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.administratorService.remove(id);
  }
}