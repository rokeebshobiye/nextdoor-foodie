import { PartialType } from "@nestjs/mapped-types";
import { CreatePromoLikeDto } from "./create-promo_likes.dto";

export class UpdatePromoLikeDto extends PartialType(CreatePromoLikeDto) {}