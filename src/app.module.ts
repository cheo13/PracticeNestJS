import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controllers/cats/cats.controller';
import { RatsController } from './controllers/rats/rats.controller';
import { CatsService } from './controllers/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController,CatsController,RatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
