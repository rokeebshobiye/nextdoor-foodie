import { PartialType } from "@nestjs/mapped-types";
import { CreateAdministratorDto } from "./create-administrators.dto";

export class UpdateAdministratorDto extends PartialType(CreateAdministratorDto) {}