import { StorageStatus } from '@/storage-status/entities/storage-status.entity';
import { StorageStatusResolver } from '@/storage-status/storage-status.resolver';
import { StorageStatusService } from '@/storage-status/storage-status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StorageStatus])],
  providers: [StorageStatusResolver, StorageStatusService],
})
export class StorageStatusModule {}
