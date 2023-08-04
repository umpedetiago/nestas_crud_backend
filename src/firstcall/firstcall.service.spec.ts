import { Test, TestingModule } from '@nestjs/testing';
import { FirstcallService } from './firstcall.service';

describe('FirstcallService', () => {
  let service: FirstcallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstcallService],
    }).compile();

    service = module.get<FirstcallService>(FirstcallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
