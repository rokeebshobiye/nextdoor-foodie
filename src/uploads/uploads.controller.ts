import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { UploadService } from "./uploads.service";
import { CreateUploadDto } from "./dto/create-uploads.dto";
import { UpdateUploadDto } from "./dto/update-uploads.dto";

@Controller("uploads")
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.uploadService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.uploadService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateUploadDto) {
    return this.uploadService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUploadDto) {
    return this.uploadService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.uploadService.remove(id);
  }
}