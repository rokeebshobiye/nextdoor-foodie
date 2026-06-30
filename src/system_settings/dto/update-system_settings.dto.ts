import { PartialType } from "@nestjs/mapped-types";
import { CreateSystemSettingDto } from "./create-system_settings.dto";

export class UpdateSystemSettingDto extends PartialType(CreateSystemSettingDto) {}