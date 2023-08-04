import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstcallModule } from './firstcall/firstcall.module';


@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [FirstcallModule],
})
export class AppModule {}
