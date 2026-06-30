import { PartialType } from "@nestjs/mapped-types";
import { CreateUserRoleDto } from "./create-user_roles.dto";

export class UpdateUserRoleDto extends PartialType(CreateUserRoleDto) {}