import { Test, TestingModule } from '@nestjs/testing';

import { PcProgramResolver } from '@/pc_program/pc_program.resolver';
import { PcProgramService } from '@/pc_program/pc_program.service';

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
