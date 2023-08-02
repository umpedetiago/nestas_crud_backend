import { Module } from '@nestjs/common';
import { TestejsService } from './testejs.service';
import { TestejsController } from './testejs.controller';

@Module({
  controllers: [TestejsController],
  providers: [TestejsService]
})
export class TestejsModule {}
