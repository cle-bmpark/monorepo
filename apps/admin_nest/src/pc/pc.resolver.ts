import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePcInput } from './dto/create-pc.input';
import { UpdatePcInput } from './dto/update-pc.input';
import { Pc } from './entities/pc.entity';
import { PcService } from './pc.service';

@Resolver(() => Pc)
export class PcResolver {
  constructor(private readonly pcService: PcService) {}

  @Mutation(() => Pc)
  createPc(@Args('createPcInput') createPcInput: CreatePcInput) {
    return this.pcService.create(createPcInput);
  }

  @Query(() => [Pc], { name: 'pc' })
  findAll() {
    return this.pcService.findAll();
  }

  @Query(() => Pc, { name: 'pc' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pcService.findOne(id);
  }

  @Mutation(() => Pc)
  updatePc(@Args('updatePcInput') updatePcInput: UpdatePcInput) {
    return this.pcService.update(updatePcInput.id, updatePcInput);
  }

  @Mutation(() => Pc)
  removePc(@Args('id', { type: () => Int }) id: number) {
    return this.pcService.remove(id);
  }
}
