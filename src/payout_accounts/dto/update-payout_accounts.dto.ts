import { PartialType } from "@nestjs/mapped-types";
import { CreatePayoutAccountDto } from "./create-payout_accounts.dto";

export class UpdatePayoutAccountDto extends PartialType(CreatePayoutAccountDto) {}