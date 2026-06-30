import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { SubscriptionService } from "./subscriptions.service";
import { CreateSubscriptionDto } from "./dto/create-subscriptions.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscriptions.dto";

@Controller("subscriptions")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.subscriptionService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.subscriptionService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateSubscriptionDto) {
    return this.subscriptionService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subscriptionService.remove(id);
  }
}