import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-orders.dto";
import { UpdateOrderDto } from "./dto/update-orders.dto";

@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.orderService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.orderService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateOrderDto) {
    return this.orderService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderService.remove(id);
  }
}