import { StorageStatus } from '@/storage_status/entities/storage_status.entity';
import { StorageStatusResolver } from '@/storage_status/storage_status.resolver';
import { StorageStatusService } from '@/storage_status/storage_status.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StorageStatus])],
  providers: [StorageStatusResolver, StorageStatusService],
})
export class StorageStatusModule {}
