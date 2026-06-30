import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-orders.dto";
import { UpdateOrderDto } from "./dto/update-orders.dto";

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(include: string[] = [], tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).order.findMany({
      
      include: this.getIncludes(include)
    });
  }

  async findOne(id: string, include: string[] = [], tx?: Prisma.TransactionClient) {
    const record = await (tx || this.prisma).order.findUnique({
      where: { id },
      include: this.getIncludes(include),
    });
    if (!record) throw new NotFoundException(`Order #${id} not found`);
    return record;
  }

  async create(dto: CreateOrderDto, tx?: Prisma.TransactionClient) {
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).order.create({ data });
    return result;
  }

  async update(id: string, dto: UpdateOrderDto, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).order.update({ where: { id }, data });
    return result;
  }

  async remove(id: string, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const result = await (tx || this.prisma).order.delete({ where: { id } });
    return result;
  }

  private getIncludes(includeList: string[]) {
    const allowed = ["transaction"];
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