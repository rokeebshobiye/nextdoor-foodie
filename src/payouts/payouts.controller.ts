import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { PayoutService } from "./payouts.service";
import { CreatePayoutDto } from "./dto/create-payouts.dto";
import { UpdatePayoutDto } from "./dto/update-payouts.dto";

@Controller("payouts")
export class PayoutController {
  constructor(private readonly payoutService: PayoutService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.payoutService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.payoutService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreatePayoutDto) {
    return this.payoutService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePayoutDto) {
    return this.payoutService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.payoutService.remove(id);
  }
}