import { GpuStatusService } from '@/gpu_status/gpu_status.service';
import { Test, TestingModule } from '@nestjs/testing';

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
