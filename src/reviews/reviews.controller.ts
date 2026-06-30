import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from "@nestjs/common";
import { ReviewService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-reviews.dto";
import { UpdateReviewDto } from "./dto/update-reviews.dto";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(@Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.reviewService.findAll(includes);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query("include") include?: string) {
    const includes = include ? include.split(",") : [];
    return this.reviewService.findOne(id, includes);
  }

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateReviewDto) {
    return this.reviewService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reviewService.remove(id);
  }
}