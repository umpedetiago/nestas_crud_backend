import { Module } from '@nestjs/common';
import { FirstcallService } from './firstcall.service';
import { FirstcallController } from './firstcall.controller';

@Module({
  controllers: [FirstcallController],
  providers: [FirstcallService]
})
export class FirstcallModule {}
