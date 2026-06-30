import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(include: string[] = [], tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).user.findMany({
      
      include: this.getIncludes(include)
    });
  }

  async findOne(id: string, include: string[] = [], tx?: Prisma.TransactionClient) {
    const record = await (tx || this.prisma).user.findUnique({
      where: { id },
      include: this.getIncludes(include),
    });
    if (!record) throw new NotFoundException(`User #${id} not found`);
    return record;
  }

  async create(dto: CreateUserDto, tx?: Prisma.TransactionClient) {
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).user.create({ data });
    return result;
  }

  async update(id: string, dto: UpdateUserDto, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).user.update({ where: { id }, data });
    return result;
  }

  async remove(id: string, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const result = await (tx || this.prisma).user.delete({ where: { id } });
    return result;
  }

  private getIncludes(includeList: string[]) {
    const allowed = ["auth", "promoLike", "userAnalytic", "userRole", "userSetting"];
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