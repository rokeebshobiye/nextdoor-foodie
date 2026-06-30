import { PartialType } from "@nestjs/mapped-types";
import { CreateUserAnalyticDto } from "./create-user_analytics.dto";

export class UpdateUserAnalyticDto extends PartialType(CreateUserAnalyticDto) {}