import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty({ type: String, required: true })
  description: string;

  @ApiProperty({ type: Boolean, required: false, default: false })
  is_done: boolean = false;
}
