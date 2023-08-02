import { Injectable } from '@nestjs/common';
import { CreateTestejDto } from './dto/create-testej.dto';
import { UpdateTestejDto } from './dto/update-testej.dto';

@Injectable()
export class TestejsService {
  create(createTestejDto: CreateTestejDto) {
    return 'This action adds a new testej';
  }

  findAll() {
    return `This action returns all testejs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testej`;
  }

  update(id: number, updateTestejDto: UpdateTestejDto) {
    return `This action updates a #${id} testej`;
  }

  remove(id: number) {
    return `This action removes a #${id} testej`;
  }
}
