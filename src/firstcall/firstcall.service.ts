import { Injectable } from '@nestjs/common';
import { CreateFirstcallDto } from './dto/create-firstcall.dto';
import { UpdateFirstcallDto } from './dto/update-firstcall.dto';

@Injectable()
export class FirstcallService {
  create(createFirstcallDto: CreateFirstcallDto) {
    return 'This action adds a new firstcall';
  }

  findAll() {
    return `This action returns all firstcall`;
  }

  findOne(id: number) {
    return `This action returns a #${id} firstcall`;
  }

  update(id: number, updateFirstcallDto: UpdateFirstcallDto) {
    return `This action updates a #${id} firstcall`;
  }

  remove(id: number) {
    return `This action removes a #${id} firstcall`;
  }
}
