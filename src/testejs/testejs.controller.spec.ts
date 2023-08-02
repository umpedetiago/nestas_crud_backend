import { Test, TestingModule } from '@nestjs/testing';
import { TestejsController } from './testejs.controller';
import { TestejsService } from './testejs.service';

describe('TestejsController', () => {
  let controller: TestejsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestejsController],
      providers: [TestejsService],
    }).compile();

    controller = module.get<TestejsController>(TestejsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
