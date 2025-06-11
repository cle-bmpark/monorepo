import { CreateTempStatusInput } from '@/temp_status/dto/create-temp_status.input';
import { UpdateTempStatusInput } from '@/temp_status/dto/update-temp_status.input';
import { TempStatus } from '@/temp_status/entities/temp_status.entity';
import { TempStatusService } from '@/temp_status/temp_status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => TempStatus)
export class TempStatusResolver {
  constructor(private readonly tempStatusService: TempStatusService) {}

  @Mutation(() => TempStatus)
  createTempStatus(@Args('createTempStatusInput') createTempStatusInput: CreateTempStatusInput) {
    return this.tempStatusService.create(createTempStatusInput);
  }

  @Query(() => [TempStatus], { name: 'tempStatus' })
  findAll() {
    return this.tempStatusService.findAll();
  }

  @Query(() => TempStatus, { name: 'tempStatus' })
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
