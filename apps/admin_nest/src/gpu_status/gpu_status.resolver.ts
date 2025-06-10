import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGpuStatusInput } from './dto/create-gpu_status.input';
import { UpdateGpuStatusInput } from './dto/update-gpu_status.input';
import { GpuStatus } from './entities/gpu_status.entity';
import { GpuStatusService } from './gpu_status.service';

@Resolver(() => GpuStatus)
export class GpuStatusResolver {
  constructor(private readonly gpuStatusService: GpuStatusService) {}

  @Mutation(() => GpuStatus)
  createGpuStatus(@Args('createGpuStatusInput') createGpuStatusInput: CreateGpuStatusInput) {
    return this.gpuStatusService.create(createGpuStatusInput);
  }

  @Query(() => [GpuStatus], { name: 'gpuStatus' })
  findAll() {
    return this.gpuStatusService.findAll();
  }

  @Query(() => GpuStatus, { name: 'gpuStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gpuStatusService.findOne(id);
  }

  @Mutation(() => GpuStatus)
  updateGpuStatus(@Args('updateGpuStatusInput') updateGpuStatusInput: UpdateGpuStatusInput) {
    return this.gpuStatusService.update(updateGpuStatusInput.id, updateGpuStatusInput);
  }

  @Mutation(() => GpuStatus)
  removeGpuStatus(@Args('id', { type: () => Int }) id: number) {
    return this.gpuStatusService.remove(id);
  }
}
