import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestejsService } from './testejs.service';
import { CreateTestejDto } from './dto/create-testej.dto';
import { UpdateTestejDto } from './dto/update-testej.dto';

@Controller('testejs')
export class TestejsController {
  constructor(private readonly testejsService: TestejsService) {}

  @Post()
  create(@Body() createTestejDto: CreateTestejDto) {
    return this.testejsService.create(createTestejDto);
  }

  @Get()
  findAll() {
    return this.testejsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testejsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestejDto: UpdateTestejDto) {
    return this.testejsService.update(+id, updateTestejDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testejsService.remove(+id);
  }
}
