import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsBoolean, IsString } from "class-validator";

export class FilterTodoDto {
  @ApiProperty({ type: Boolean, required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "false") return false;
    if (value === "true") return true;
    return value;
  })
  is_done?: boolean;

  @ApiProperty({ type: Boolean, required: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "false") return false;
    if (value === "true") return true;
    return value;
  })
  ascending?: boolean;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  search?: string;
}