import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        approximateValue: true,
        category: true,
        categoryId: false,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      data: updateProductDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
