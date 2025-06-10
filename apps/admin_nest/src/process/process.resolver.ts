import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProcessInput } from './dto/create-process.input';
import { UpdateProcessInput } from './dto/update-process.input';
import { Process } from './entities/process.entity';
import { ProcessService } from './process.service';

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
