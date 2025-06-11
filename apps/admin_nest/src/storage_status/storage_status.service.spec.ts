import { StorageStatusService } from '@/storage_status/storage_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('StorageStatusService', () => {
  let service: StorageStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageStatusService],
    }).compile();

    service = module.get<StorageStatusService>(StorageStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
