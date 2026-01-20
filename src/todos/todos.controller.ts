import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ErrorHandler } from 'src/utils/error-handler.util';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  public create(@Body() createTodoDto: CreateTodoDto) {
    try {
      return this.todosService.create(createTodoDto);
    } catch (error) {
      return new ErrorHandler(error);
    }
  }

  @Get()
  public findAll() {
    try {
      return this.todosService.findAll();
    } catch (error) {
      return new ErrorHandler(error);
    }
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    try {
      return this.todosService.findOne(+id);
    } catch (error) {
      return new ErrorHandler(error);
    }
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      return this.todosService.update(+id, updateTodoDto);
    } catch (error) {
      return new ErrorHandler(error);
    }
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    try {
      return this.todosService.remove(+id);
    } catch (error) {
      return new ErrorHandler(error);
    }
  }
}
