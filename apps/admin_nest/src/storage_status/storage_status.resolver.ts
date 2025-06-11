import { CreateStorageStatusInput } from '@/storage_status/dto/create-storage_status.input';
import { UpdateStorageStatusInput } from '@/storage_status/dto/update-storage_status.input';
import { StorageStatus } from '@/storage_status/entities/storage_status.entity';
import { StorageStatusService } from '@/storage_status/storage_status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => StorageStatus)
export class StorageStatusResolver {
  constructor(private readonly storageStatusService: StorageStatusService) {}

  @Mutation(() => StorageStatus)
  createStorageStatus(
    @Args('createStorageStatusInput') createStorageStatusInput: CreateStorageStatusInput,
  ) {
    return this.storageStatusService.create(createStorageStatusInput);
  }

  @Query(() => [StorageStatus], { name: 'storageStatus' })
  findAll() {
    return this.storageStatusService.findAll();
  }

  @Query(() => StorageStatus, { name: 'storageStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storageStatusService.findOne(id);
  }

  @Mutation(() => StorageStatus)
  updateStorageStatus(
    @Args('updateStorageStatusInput') updateStorageStatusInput: UpdateStorageStatusInput,
  ) {
    return this.storageStatusService.update(updateStorageStatusInput.id, updateStorageStatusInput);
  }

  @Mutation(() => StorageStatus)
  removeStorageStatus(@Args('id', { type: () => Int }) id: number) {
    return this.storageStatusService.remove(id);
  }
}
