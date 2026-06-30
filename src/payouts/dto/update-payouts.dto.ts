import { PartialType } from "@nestjs/mapped-types";
import { CreatePayoutDto } from "./create-payouts.dto";

export class UpdatePayoutDto extends PartialType(CreatePayoutDto) {}