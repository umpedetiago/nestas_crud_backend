import { Test, TestingModule } from '@nestjs/testing';
import { TestejsService } from './testejs.service';

describe('TestejsService', () => {
  let service: TestejsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestejsService],
    }).compile();

    service = module.get<TestejsService>(TestejsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
