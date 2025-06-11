import { TempStatusService } from '@/temp_status/temp_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TempStatusService', () => {
  let service: TempStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TempStatusService],
    }).compile();

    service = module.get<TempStatusService>(TempStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
