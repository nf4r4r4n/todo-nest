import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterTodoDto } from './dto/filter-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) { }

  public async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todos.create({
      data: {
        ...createTodoDto,
        created_at: new Date(),
      }
    })
  }

  public async findAll(filterTodoDto: FilterTodoDto) {
    const { ascending, is_done, search } = filterTodoDto;
    return await this.prisma.todos.findMany({
      where: {
        is_done,
        description: {
          contains: search
        }
      },
      orderBy: {
        created_at: ascending ? "asc" : "desc",
      }
    });
  }

  public async findOne(id: number) {
    const todo = await this.prisma.todos.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException();
    return todo;
  }

  public async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.prisma.todos.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException();
    return this.prisma.todos.update({
      where: { id },
      data: {
        ...updateTodoDto
      }
    });
  }

  public async remove(id: number) {
    const todo = await this.prisma.todos.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException();
    return await this.prisma.todos.delete({ where: { id } });
  }

  public async removeAll() {
    return await this.prisma.todos.deleteMany({});
  }
}
