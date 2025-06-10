import { Test, TestingModule } from '@nestjs/testing';
import { StorageStatusResolver } from './storage_status.resolver';
import { StorageStatusService } from './storage_status.service';

describe('StorageStatusResolver', () => {
  let resolver: StorageStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageStatusResolver, StorageStatusService],
    }).compile();

    resolver = module.get<StorageStatusResolver>(StorageStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
