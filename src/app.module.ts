import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstcallModule } from './firstcall/firstcall.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [FirstcallModule, ProductModule, CategoryModule],
})
export class AppModule {}
