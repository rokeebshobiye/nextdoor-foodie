import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { UserRoleService } from "./user_roles.service";
import { CreateUserRoleDto } from "./dto/create-user_roles.dto";
import { UpdateUserRoleDto } from "./dto/update-user_roles.dto";

@Controller("user_roles")
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userRoleService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.userRoleService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateUserRoleDto) {
    return this.userRoleService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserRoleDto) {
    return this.userRoleService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userRoleService.remove(id);
  }
}