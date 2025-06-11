import { ProcessResolver } from '@/process/process.resolver';
import { ProcessService } from '@/process/process.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ProcessResolver', () => {
  let resolver: ProcessResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessResolver, ProcessService],
    }).compile();

    resolver = module.get<ProcessResolver>(ProcessResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
