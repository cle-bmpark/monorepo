import { NetworkStatus } from '@/network_status/entities/network_status.entity';
import { NetworkStatusResolver } from '@/network_status/network_status.resolver';
import { NetworkStatusService } from '@/network_status/network_status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NetworkStatus])],
  providers: [NetworkStatusResolver, NetworkStatusService],
})
export class NetworkStatusModule {}
