import { CpuStatusService } from '@/cpu_status/cpu_status.service';
import { CreateCpuStatusInput } from '@/cpu_status/dto/create-cpu_status.input';
import { UpdateCpuStatusInput } from '@/cpu_status/dto/update-cpu_status.input';
import { CpuStatus } from '@/cpu_status/entities/cpu_status.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => CpuStatus)
export class CpuStatusResolver {
  constructor(private readonly cpuStatusService: CpuStatusService) {}

  @Mutation(() => CpuStatus)
  createCpuStatus(@Args('createCpuStatusInput') createCpuStatusInput: CreateCpuStatusInput) {
    return this.cpuStatusService.create(createCpuStatusInput);
  }

  @Query(() => [CpuStatus], { name: 'cpuStatus' })
  findAll() {
    return this.cpuStatusService.findAll();
  }

  @Query(() => CpuStatus, { name: 'cpuStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cpuStatusService.findOne(id);
  }

  @Mutation(() => CpuStatus)
  updateCpuStatus(@Args('updateCpuStatusInput') updateCpuStatusInput: UpdateCpuStatusInput) {
    return this.cpuStatusService.update(updateCpuStatusInput.id, updateCpuStatusInput);
  }

  @Mutation(() => CpuStatus)
  removeCpuStatus(@Args('id', { type: () => Int }) id: number) {
    return this.cpuStatusService.remove(id);
  }
}
