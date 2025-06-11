import { PcDriverService } from '@/pc_driver/pc_driver.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PcDriverService', () => {
  let service: PcDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcDriverService],
    }).compile();

    service = module.get<PcDriverService>(PcDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
