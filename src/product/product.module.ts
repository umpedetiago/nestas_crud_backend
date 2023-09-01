import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [CommonModule, AuthModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
