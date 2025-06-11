import { NetworkStatusResolver } from '@/network_status/network_status.resolver';
import { NetworkStatusService } from '@/network_status/network_status.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [NetworkStatusResolver, NetworkStatusService],
})
export class NetworkStatusModule {}
