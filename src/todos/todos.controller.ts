import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBody } from '@nestjs/swagger';
import { FilterTodoDto } from './dto/filter-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @ApiBody({ type: CreateTodoDto })
  @Post()
  public async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todosService.create(createTodoDto);
  }

  @Get()
  public async findAll(@Query() filterTodoDto: FilterTodoDto) {
    return await this.todosService.findAll(filterTodoDto);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.todosService.findOne(+id);
  }

  @ApiBody({ type: UpdateTodoDto })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todosService.update(+id, updateTodoDto);
  }

  @Patch('check/:id')
  public async check(@Param('id') id: string) {
    return await this.todosService.update(+id, { is_done: true });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.todosService.remove(+id);
  }

  @Delete()
  public async removeAll() {
    return await this.todosService.removeAll();
  }
}
