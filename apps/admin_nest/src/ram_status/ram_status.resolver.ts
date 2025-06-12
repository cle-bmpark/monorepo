import { CreateRamStatusInput } from '@/ram_status/dto/create-ram_status.input';
import { UpdateRamStatusInput } from '@/ram_status/dto/update-ram_status.input';
import { RamStatus } from '@/ram_status/entities/ram_status.entity';
import { RamStatusService } from '@/ram_status/ram_status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => RamStatus)
export class RamStatusResolver {
  constructor(private readonly ramStatusService: RamStatusService) {}

  @Mutation(() => RamStatus)
  createRamStatus(@Args('createRamStatusInput') createRamStatusInput: CreateRamStatusInput) {
    return this.ramStatusService.create(createRamStatusInput);
  }

  @Query(() => [RamStatus], { name: 'ramStatusList', description: '모든 Ram Status 목록 조회' })
  findAll() {
    return this.ramStatusService.findAll();
  }

  @Query(() => RamStatus, {
    name: 'ramStatusDetail',
    description: '특정 ID의 Ram Status 정보 조회',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ramStatusService.findOne(id);
  }

  @Mutation(() => RamStatus)
  updateRamStatus(@Args('updateRamStatusInput') updateRamStatusInput: UpdateRamStatusInput) {
    return this.ramStatusService.update(updateRamStatusInput.id, updateRamStatusInput);
  }

  @Mutation(() => RamStatus)
  removeRamStatus(@Args('id', { type: () => Int }) id: number) {
    return this.ramStatusService.remove(id);
  }
}
