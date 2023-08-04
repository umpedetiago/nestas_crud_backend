import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FirstcallService } from './firstcall.service';
import { CreateFirstcallDto } from './dto/create-firstcall.dto';
import { UpdateFirstcallDto } from './dto/update-firstcall.dto';

@Controller('firstcall')
export class FirstcallController {
  constructor(private readonly firstcallService: FirstcallService) {}

  @Post()
  create(@Body() createFirstcallDto: CreateFirstcallDto) {
    return this.firstcallService.create(createFirstcallDto);
  }

  @Get()
  findAll() {
    return this.firstcallService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.firstcallService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFirstcallDto: UpdateFirstcallDto) {
    return this.firstcallService.update(+id, updateFirstcallDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.firstcallService.remove(+id);
  }
}
