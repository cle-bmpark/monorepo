import { StorageStatusResolver } from '@/storage_status/storage_status.resolver';
import { StorageStatusService } from '@/storage_status/storage_status.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [StorageStatusResolver, StorageStatusService],
})
export class StorageStatusModule {}
