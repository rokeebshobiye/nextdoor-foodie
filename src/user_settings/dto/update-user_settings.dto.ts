import { PartialType } from "@nestjs/mapped-types";
import { CreateUserSettingDto } from "./create-user_settings.dto";

export class UpdateUserSettingDto extends PartialType(CreateUserSettingDto) {}