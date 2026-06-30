import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { WalletService } from "./wallets.service";
import { CreateWalletDto } from "./dto/create-wallets.dto";
import { UpdateWalletDto } from "./dto/update-wallets.dto";

@Controller("wallets")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.walletService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.walletService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.walletService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateWalletDto) {
    return this.walletService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.walletService.remove(id);
  }
}