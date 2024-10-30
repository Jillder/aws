import { PartialType } from "@nestjs/graphql";
import { CreateUserDto } from "./create-user.dto";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}