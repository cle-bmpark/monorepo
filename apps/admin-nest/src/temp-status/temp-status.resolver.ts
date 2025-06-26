import { CreateTempStatusInput } from '@/temp-status/dto/create-temp-status.input';
import { UpdateTempStatusInput } from '@/temp-status/dto/update-temp-status.input';
import { TempStatus } from '@/temp-status/entities/temp-status.entity';
import { TempStatusService } from '@/temp-status/temp-status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => TempStatus)
export class TempStatusResolver {
  constructor(private readonly tempStatusService: TempStatusService) {}

  @Mutation(() => TempStatus)
  createTempStatus(@Args('createTempStatusInput') createTempStatusInput: CreateTempStatusInput) {
    return this.tempStatusService.create(createTempStatusInput);
  }

  @Query(() => [TempStatus], { name: 'tempStatusList', description: '모든 Temp Status 목록 조회' })
  findAll() {
    return this.tempStatusService.findAll();
  }

  @Query(() => TempStatus, {
    name: 'tempStatusDetail',
    description: '특정 ID의 Temp Status 정보 조회',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tempStatusService.findOne(id);
  }

  @Mutation(() => TempStatus)
  updateTempStatus(@Args('updateTempStatusInput') updateTempStatusInput: UpdateTempStatusInput) {
    return this.tempStatusService.update(updateTempStatusInput.id, updateTempStatusInput);
  }

  @Mutation(() => TempStatus)
  removeTempStatus(@Args('id', { type: () => Int }) id: number) {
    return this.tempStatusService.remove(id);
  }
}
