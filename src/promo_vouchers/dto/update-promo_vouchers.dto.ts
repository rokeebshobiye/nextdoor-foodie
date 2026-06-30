import { PartialType } from "@nestjs/mapped-types";
import { CreatePromoVoucherDto } from "./create-promo_vouchers.dto";

export class UpdatePromoVoucherDto extends PartialType(CreatePromoVoucherDto) {}