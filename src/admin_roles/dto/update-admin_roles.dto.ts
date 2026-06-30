import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminRoleDto } from "./create-admin_roles.dto";

export class UpdateAdminRoleDto extends PartialType(CreateAdminRoleDto) {}