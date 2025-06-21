import { Test, TestingModule } from '@nestjs/testing';

import { CpuStatusResolver } from '@/cpu_status/cpu_status.resolver';
import { CpuStatusService } from '@/cpu_status/cpu_status.service';

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
