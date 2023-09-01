import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CommonModule } from './common/common.module';
import { ProductModule } from './product/product.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProductModule, CategoryModule, CommonModule, AuthModule],
})
export class AppModule {}
