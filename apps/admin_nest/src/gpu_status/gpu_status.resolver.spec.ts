import { GpuStatusResolver } from '@/gpu_status/gpu_status.resolver';
import { GpuStatusService } from '@/gpu_status/gpu_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GpuStatusResolver', () => {
  let resolver: GpuStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpuStatusResolver, GpuStatusService],
    }).compile();

    resolver = module.get<GpuStatusResolver>(GpuStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
