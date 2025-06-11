import { LineService } from '@/line/line.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('LineService', () => {
  let service: LineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineService],
    }).compile();

    service = module.get<LineService>(LineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
