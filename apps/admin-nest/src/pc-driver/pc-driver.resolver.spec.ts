import { Test, TestingModule } from '@nestjs/testing';

import { PcDriverResolver } from '@/pc-driver/pc-driver.resolver';
import { PcDriverService } from '@/pc-driver/pc-driver.service';

describe('PcDriverResolver', () => {
  let resolver: PcDriverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcDriverResolver, PcDriverService],
    }).compile();

    resolver = module.get<PcDriverResolver>(PcDriverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
