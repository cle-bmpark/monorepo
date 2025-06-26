import { Test, TestingModule } from '@nestjs/testing';

import { PcDriverService } from '@/pc-driver/pc-driver.service';

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
