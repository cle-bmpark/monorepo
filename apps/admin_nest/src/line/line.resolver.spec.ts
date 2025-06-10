import { Test, TestingModule } from '@nestjs/testing';
import { LineResolver } from './line.resolver';
import { LineService } from './line.service';

describe('LineResolver', () => {
  let resolver: LineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineResolver, LineService],
    }).compile();

    resolver = module.get<LineResolver>(LineResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
