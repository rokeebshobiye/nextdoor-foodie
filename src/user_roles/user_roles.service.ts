import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserRoleDto } from "./dto/create-user_roles.dto";
import { UpdateUserRoleDto } from "./dto/update-user_roles.dto";

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(include: string[] = [], tx?: Prisma.TransactionClient) {
    return (tx || this.prisma).userRole.findMany({
      
      include: this.getIncludes(include)
    });
  }

  async findOne(id: string, include: string[] = [], tx?: Prisma.TransactionClient) {
    const record = await (tx || this.prisma).userRole.findUnique({
      where: { id },
      include: this.getIncludes(include),
    });
    if (!record) throw new NotFoundException(`UserRole #${id} not found`);
    return record;
  }

  async create(dto: CreateUserRoleDto, tx?: Prisma.TransactionClient) {
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).userRole.create({ data });
    return result;
  }

  async update(id: string, dto: UpdateUserRoleDto, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const data = { ...dto } as any;
    const result = await (tx || this.prisma).userRole.update({ where: { id }, data });
    return result;
  }

  async remove(id: string, tx?: Prisma.TransactionClient) {
    const record = await this.findOne(id, [], tx);
    const result = await (tx || this.prisma).userRole.delete({ where: { id } });
    return result;
  }

  private getIncludes(includeList: string[]) {
    const allowed = ["user"];
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