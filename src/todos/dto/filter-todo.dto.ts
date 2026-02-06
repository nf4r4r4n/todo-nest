import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsBoolean } from "class-validator";

export class FilterTodoDto {
  @ApiProperty({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === "false") return false;
    if (value === "true") return true;
    return value;
  })
  is_done?: boolean;
}