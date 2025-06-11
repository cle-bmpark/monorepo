import { RamStatusResolver } from '@/ram_status/ram_status.resolver';
import { RamStatusService } from '@/ram_status/ram_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RamStatusResolver', () => {
  let resolver: RamStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RamStatusResolver, RamStatusService],
    }).compile();

    resolver = module.get<RamStatusResolver>(RamStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
