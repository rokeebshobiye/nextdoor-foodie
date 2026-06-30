import { PartialType } from "@nestjs/mapped-types";
import { CreateSubscriptionPlanDto } from "./create-subscription_plans.dto";

export class UpdateSubscriptionPlanDto extends PartialType(CreateSubscriptionPlanDto) {}