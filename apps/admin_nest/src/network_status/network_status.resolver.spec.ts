import { NetworkStatusResolver } from '@/network_status/network_status.resolver';
import { NetworkStatusService } from '@/network_status/network_status.service';
import { Test, TestingModule } from '@nestjs/testing';

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
