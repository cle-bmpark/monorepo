import { Test, TestingModule } from '@nestjs/testing';

import { NetworkStatusResolver } from '@/network-status/network-status.resolver';
import { NetworkStatusService } from '@/network-status/network-status.service';

describe('NetworkStatusResolver', () => {
  let resolver: NetworkStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkStatusResolver, NetworkStatusService],
    }).compile();

    resolver = module.get<NetworkStatusResolver>(NetworkStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
