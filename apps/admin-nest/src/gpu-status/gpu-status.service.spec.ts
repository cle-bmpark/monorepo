import { Test, TestingModule } from '@nestjs/testing';

import { GpuStatusService } from '@/gpu-status/gpu-status.service';

describe('GpuStatusService', () => {
  let service: GpuStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpuStatusService],
    }).compile();

    service = module.get<GpuStatusService>(GpuStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
