import { ApiProperty } from "@nestjs/swagger";

export class UpdateTodoDto {
  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: Boolean, required: false })
  is_done?: boolean;
}
