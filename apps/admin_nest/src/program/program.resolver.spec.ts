import { Test, TestingModule } from '@nestjs/testing';

import { ProgramResolver } from '@/program/program.resolver';
import { ProgramService } from '@/program/program.service';

describe('ProgramResolver', () => {
  let resolver: ProgramResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramResolver, ProgramService],
    }).compile();

    resolver = module.get<ProgramResolver>(ProgramResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
