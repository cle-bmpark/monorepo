import { ProcessService } from '@/process/process.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ProcessService', () => {
  let service: ProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessService],
    }).compile();

    service = module.get<ProcessService>(ProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
