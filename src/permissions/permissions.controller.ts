import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PermissionService } from "./permissions.service";
import { CreatePermissionDto } from "./dto/create-permissions.dto";
import { UpdatePermissionDto } from "./dto/update-permissions.dto";

@Controller("permissions")
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.permissionService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.permissionService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePermissionDto) {
    return this.permissionService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePermissionDto) {
    return this.permissionService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.permissionService.remove(id);
  }
}