import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PayoutAccountService } from "./payout_accounts.service";
import { CreatePayoutAccountDto } from "./dto/create-payout_accounts.dto";
import { UpdatePayoutAccountDto } from "./dto/update-payout_accounts.dto";

@Controller("payout_accounts")
export class PayoutAccountController {
  constructor(private readonly payoutAccountService: PayoutAccountService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.payoutAccountService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.payoutAccountService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePayoutAccountDto) {
    return this.payoutAccountService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePayoutAccountDto) {
    return this.payoutAccountService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.payoutAccountService.remove(id);
  }
}