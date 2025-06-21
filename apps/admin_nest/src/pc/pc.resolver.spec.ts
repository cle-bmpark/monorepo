import { Test, TestingModule } from '@nestjs/testing';

import { PcResolver } from '@/pc/pc.resolver';
import { PcService } from '@/pc/pc.service';

describe('PcResolver', () => {
  let resolver: PcResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcResolver, PcService],
    }).compile();

    resolver = module.get<PcResolver>(PcResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
