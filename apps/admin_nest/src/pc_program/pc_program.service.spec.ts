import { PcProgramService } from '@/pc_program/pc_program.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PcProgramService', () => {
  let service: PcProgramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcProgramService],
    }).compile();

    service = module.get<PcProgramService>(PcProgramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
