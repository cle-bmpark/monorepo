import { CreateStorageStatusInput } from '@/storage_status/dto/create-storage_status.input';
import { UpdateStorageStatusInput } from '@/storage_status/dto/update-storage_status.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageStatusService {
  create(_createStorageStatusInput: CreateStorageStatusInput) {
    return 'This action adds a new storageStatus';
  }

  findAll() {
    return `This action returns all storageStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} storageStatus`;
  }

  update(id: number, _updateStorageStatusInput: UpdateStorageStatusInput) {
    return `This action updates a #${id.toString()} storageStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} storageStatus`;
  }
}
