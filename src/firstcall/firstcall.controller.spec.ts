import { Test, TestingModule } from '@nestjs/testing';
import { FirstcallController } from './firstcall.controller';
import { FirstcallService } from './firstcall.service';

describe('FirstcallController', () => {
  let controller: FirstcallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstcallController],
      providers: [FirstcallService],
    }).compile();

    controller = module.get<FirstcallController>(FirstcallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
