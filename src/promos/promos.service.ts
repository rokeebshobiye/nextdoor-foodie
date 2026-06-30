import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePromoDto } from "./dto/create-promos.dto";
import { UpdatePromoDto } from "./dto/update-promos.dto";

@Injectable()
export class PromoService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(include: string[] = [], tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).promo.findMany({
      
      include: this.getIncludes(include)
    });
  }

  async findOne(id: string, include: string[] = [], tx?: Prisma.TransactionClient) {
    const record = await (tx || this.prisma).promo.findUnique({
      where: { id },
      include: this.getIncludes(include),
    });
    if (!record) throw new NotFoundException(`Promo #${id} not found`);
    return record;
  }

  async create(dto: CreatePromoDto, tx?: Prisma.TransactionClient) {
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).promo.create({ data });
    return result;
  }

  async update(id: string, dto: UpdatePromoDto, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).promo.update({ where: { id }, data });
    return result;
  }

  async remove(id: string, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const result = await (tx || this.prisma).promo.delete({ where: { id } });
    return result;
  }

  private getIncludes(includeList: string[]) {
    const allowed = ["brand", "promoVoucher"];
    const include: Record<string, boolean> = {};
    let hasRelations = false;
    includeList.forEach(rel => {
      if (allowed.includes(rel)) {
        include[rel] = true;
        hasRelations = true;
      }
    });
    return hasRelations ? include : undefined;
  }
}