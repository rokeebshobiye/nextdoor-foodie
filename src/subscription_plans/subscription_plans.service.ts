import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSubscriptionPlanDto } from "./dto/create-subscription_plans.dto";
import { UpdateSubscriptionPlanDto } from "./dto/update-subscription_plans.dto";

@Injectable()
export class SubscriptionPlanService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(include: string[] = [], tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).subscriptionPlan.findMany({
      
      include: this.getIncludes(include)
    });
  }

  async findOne(id: string, include: string[] = [], tx?: Prisma.TransactionClient) {
    const record = await (tx || this.prisma).subscriptionPlan.findUnique({
      where: { id },
      include: this.getIncludes(include),
    });
    if (!record) throw new NotFoundException(`SubscriptionPlan #${id} not found`);
    return record;
  }

  async create(dto: CreateSubscriptionPlanDto, tx?: Prisma.TransactionClient) {
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).subscriptionPlan.create({ data });
    return result;
  }

  async update(id: string, dto: UpdateSubscriptionPlanDto, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).subscriptionPlan.update({ where: { id }, data });
    return result;
  }

  async remove(id: string, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const result = await (tx || this.prisma).subscriptionPlan.delete({ where: { id } });
    return result;
  }

  private getIncludes(includeList: string[]) {
    const allowed = ["subscription"];
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