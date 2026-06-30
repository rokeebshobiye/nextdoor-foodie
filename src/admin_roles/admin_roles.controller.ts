import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { AdminRoleService } from "./admin_roles.service";
import { CreateAdminRoleDto } from "./dto/create-admin_roles.dto";
import { UpdateAdminRoleDto } from "./dto/update-admin_roles.dto";

@Controller("admin_roles")
export class AdminRoleController {
  constructor(private readonly adminRoleService: AdminRoleService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.adminRoleService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.adminRoleService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateAdminRoleDto) {
    return this.adminRoleService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateAdminRoleDto) {
    return this.adminRoleService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminRoleService.remove(id);
  }
}