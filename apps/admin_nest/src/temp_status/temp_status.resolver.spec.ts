import { TempStatusResolver } from '@/temp_status/temp_status.resolver';
import { TempStatusService } from '@/temp_status/temp_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TempStatusResolver', () => {
  let resolver: TempStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempStatusResolver, TempStatusService],
    }).compile();

    resolver = module.get<TempStatusResolver>(TempStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
