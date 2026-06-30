import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { EventService } from "./events.service";
import { CreateEventDto } from "./dto/create-events.dto";
import { UpdateEventDto } from "./dto/update-events.dto";

@Controller("events")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.eventService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.eventService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateEventDto) {
    return this.eventService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateEventDto) {
    return this.eventService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(id);
  }
}