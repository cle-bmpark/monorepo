import { Test, TestingModule } from '@nestjs/testing';
import { TempStatusResolver } from './temp_status.resolver';
import { TempStatusService } from './temp_status.service';

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
