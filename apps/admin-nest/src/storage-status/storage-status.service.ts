import { CreateStorageStatusInput } from '@/storage-status/dto/create-storage-status.input';
import { UpdateStorageStatusInput } from '@/storage-status/dto/update-storage-status.input';
import { StorageStatus } from '@/storage-status/entities/storage-status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StorageStatusService {
  constructor(
    @InjectRepository(StorageStatus)
    private readonly storageStatusRepository: Repository<StorageStatus>,
  ) {}

  create(_createStorageStatusInput: CreateStorageStatusInput) {
    return 'This action adds a new storageStatus';
  }

  findAll(): Promise<StorageStatus[]> {
    return this.storageStatusRepository.find();
  }

  findOne(id: number): Promise<StorageStatus | null> {
    return this.storageStatusRepository.findOne({
      where: { id },
    });
  }

  findByPcId(pcId: number): Promise<StorageStatus[]> {
    return this.storageStatusRepository.find({
      where: { pcId },
    });
  }

  update(id: number, _updateStorageStatusInput: UpdateStorageStatusInput) {
    return `This action updates a #${id.toString()} storageStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} storageStatus`;
  }
}
