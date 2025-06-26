import { Test, TestingModule } from '@nestjs/testing';

import { CpuStatusResolver } from '@/cpu-status/cpu-status.resolver';
import { CpuStatusService } from '@/cpu-status/cpu-status.service';

describe('CpuStatusResolver', () => {
  let resolver: CpuStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuStatusResolver, CpuStatusService],
    }).compile();

    resolver = module.get<CpuStatusResolver>(CpuStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
