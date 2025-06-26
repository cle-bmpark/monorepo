import { Test, TestingModule } from '@nestjs/testing';

import { PcProgramResolver } from '@/pc-program/pc-program.resolver';
import { PcProgramService } from '@/pc-program/pc-program.service';

describe('PcProgramResolver', () => {
  let resolver: PcProgramResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcProgramResolver, PcProgramService],
    }).compile();

    resolver = module.get<PcProgramResolver>(PcProgramResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
