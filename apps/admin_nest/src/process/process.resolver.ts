import { CreateProcessInput } from '@/process/dto/create-process.input';
import { UpdateProcessInput } from '@/process/dto/update-process.input';
import { Process } from '@/process/entities/process.entity';
import { ProcessService } from '@/process/process.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Process)
export class ProcessResolver {
  constructor(private readonly processService: ProcessService) {}

  @Mutation(() => Process)
  createProcess(@Args('createProcessInput') createProcessInput: CreateProcessInput) {
    return this.processService.create(createProcessInput);
  }

  @Query(() => [Process], { name: 'process' })
  findAll() {
    return this.processService.findAll();
  }

  @Query(() => Process, { name: 'process' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.processService.findOne(id);
  }

  @Mutation(() => Process)
  updateProcess(@Args('updateProcessInput') updateProcessInput: UpdateProcessInput) {
    return this.processService.update(updateProcessInput.id, updateProcessInput);
  }

  @Mutation(() => Process)
  removeProcess(@Args('id', { type: () => Int }) id: number) {
    return this.processService.remove(id);
  }
}
