import { Test, TestingModule } from '@nestjs/testing';

import { RamStatusService } from '@/ram-status/ram-status.service';

describe('RamStatusService', () => {
  let service: RamStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RamStatusService],
    }).compile();

    service = module.get<RamStatusService>(RamStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
