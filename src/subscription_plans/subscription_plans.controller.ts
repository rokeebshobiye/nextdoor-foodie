import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { SubscriptionPlanService } from "./subscription_plans.service";
import { CreateSubscriptionPlanDto } from "./dto/create-subscription_plans.dto";
import { UpdateSubscriptionPlanDto } from "./dto/update-subscription_plans.dto";

@Controller("subscription_plans")
export class SubscriptionPlanController {
  constructor(private readonly subscriptionPlanService: SubscriptionPlanService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.subscriptionPlanService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.subscriptionPlanService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateSubscriptionPlanDto) {
    return this.subscriptionPlanService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSubscriptionPlanDto) {
    return this.subscriptionPlanService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subscriptionPlanService.remove(id);
  }
}