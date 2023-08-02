import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestejsModule } from './testejs/testejs.module';

@Module({
  imports: [TestejsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
