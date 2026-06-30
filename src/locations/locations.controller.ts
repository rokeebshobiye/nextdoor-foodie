import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { LocationService } from "./locations.service";
import { CreateLocationDto } from "./dto/create-locations.dto";
import { UpdateLocationDto } from "./dto/update-locations.dto";

@Controller("locations")
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.locationService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.locationService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateLocationDto) {
    return this.locationService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateLocationDto) {
    return this.locationService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.locationService.remove(id);
  }
}