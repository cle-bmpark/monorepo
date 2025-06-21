import { Test, TestingModule } from '@nestjs/testing';

import { CpuStatusService } from '@/cpu_status/cpu_status.service';

describe('CpuStatusService', () => {
  let service: CpuStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuStatusService],
    }).compile();

    service = module.get<CpuStatusService>(CpuStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
