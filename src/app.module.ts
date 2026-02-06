import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodosModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
