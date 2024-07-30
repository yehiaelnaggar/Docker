import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Project } from './database/entities/project.entity';
import { Developer } from './database/entities/developer.entity';
import { Unit } from './database/entities/unit.entity';
import { Admin } from './database/entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'yyyyy',
      entities: [Project, Developer, Unit, Admin],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Project, Developer, Unit, Admin]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
