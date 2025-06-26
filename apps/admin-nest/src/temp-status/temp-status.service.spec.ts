import { Test, TestingModule } from '@nestjs/testing';

import { TempStatusService } from '@/temp-status/temp-status.service';

describe('TempStatusService', () => {
  let service: TempStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempStatusService],
    }).compile();

    service = module.get<TempStatusService>(TempStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
