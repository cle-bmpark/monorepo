import { Module } from '@nestjs/common';
import { StorageStatusResolver } from './storage_status.resolver';
import { StorageStatusService } from './storage_status.service';

@Module({
  providers: [StorageStatusResolver, StorageStatusService],
})
export class StorageStatusModule {}
