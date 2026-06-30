import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { TransactionService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transactions.dto";
import { UpdateTransactionDto } from "./dto/update-transactions.dto";

@Controller("transactions")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.transactionService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.transactionService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateTransactionDto) {
    return this.transactionService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.transactionService.remove(id);
  }
}