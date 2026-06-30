import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { ReservationService } from "./reservations.service";
import { CreateReservationDto } from "./dto/create-reservations.dto";
import { UpdateReservationDto } from "./dto/update-reservations.dto";

@Controller("reservations")
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.reservationService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.reservationService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateReservationDto) {
    return this.reservationService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateReservationDto) {
    return this.reservationService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reservationService.remove(id);
  }
}