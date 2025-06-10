import { Module } from '@nestjs/common';
import { NetworkStatusResolver } from './network_status.resolver';
import { NetworkStatusService } from './network_status.service';

@Module({
  providers: [NetworkStatusResolver, NetworkStatusService],
})
export class NetworkStatusModule {}
