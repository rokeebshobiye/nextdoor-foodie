import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { DeviceService } from "./devices.service";
import { CreateDeviceDto } from "./dto/create-devices.dto";
import { UpdateDeviceDto } from "./dto/update-devices.dto";

@Controller("devices")
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.deviceService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.deviceService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateDeviceDto) {
    return this.deviceService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateDeviceDto) {
    return this.deviceService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deviceService.remove(id);
  }
}