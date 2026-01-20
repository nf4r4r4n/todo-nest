import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  public create(createTodoDto: CreateTodoDto) {
    try {
      console.log({ createTodoDto });
      return 'This action adds a new todo';
    } catch (error) {
      throw error;
    }
  }

  public findAll() {
    try {
      return `This action returns all todos`;
    } catch (error) {
      throw error;
    }
  }

  public findOne(id: number) {
    try {
      return `This action returns a #${id} todo`;
    } catch (error) {
      throw error;
    }
  }

  public update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      console.log({ updateTodoDto });
      return `This action updates a #${id} todo`;
    } catch (error) {
      throw error;
    }
  }

  public remove(id: number) {
    try {
      return `This action removes a #${id} todo`;
    } catch (error) {
      throw error;
    }
  }
}
