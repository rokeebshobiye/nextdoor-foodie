import { PartialType } from "@nestjs/mapped-types";
import { CreateDeviceDto } from "./create-devices.dto";

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {}