import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { AuthService } from "./auths.service";
import { CreateAuthDto } from "./dto/create-auths.dto";
import { UpdateAuthDto } from "./dto/update-auths.dto";

@Controller("auths")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.authService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.authService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateAuthDto) {
    return this.authService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateAuthDto) {
    return this.authService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(id);
  }
}