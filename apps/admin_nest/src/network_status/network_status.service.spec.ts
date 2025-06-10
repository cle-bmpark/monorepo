import { Test, TestingModule } from '@nestjs/testing';
import { NetworkStatusService } from './network_status.service';

describe('NetworkStatusService', () => {
  let service: NetworkStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkStatusService],
    }).compile();

    service = module.get<NetworkStatusService>(NetworkStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
