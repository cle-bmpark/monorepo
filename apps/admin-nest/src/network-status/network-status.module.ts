import { NetworkStatus } from '@/network-status/entities/network-status.entity';
import { NetworkStatusResolver } from '@/network-status/network-status.resolver';
import { NetworkStatusService } from '@/network-status/network-status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NetworkStatus])],
  providers: [NetworkStatusResolver, NetworkStatusService],
})
export class NetworkStatusModule {}
