import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePcDriverInput } from './dto/create-pc_driver.input';
import { UpdatePcDriverInput } from './dto/update-pc_driver.input';
import { PcDriver } from './entities/pc_driver.entity';
import { PcDriverService } from './pc_driver.service';

@Resolver(() => PcDriver)
export class PcDriverResolver {
  constructor(private readonly pcDriverService: PcDriverService) {}

  @Mutation(() => PcDriver)
  createPcDriver(@Args('createPcDriverInput') createPcDriverInput: CreatePcDriverInput) {
    return this.pcDriverService.create(createPcDriverInput);
  }

  @Query(() => [PcDriver], { name: 'pcDriver' })
  findAll() {
    return this.pcDriverService.findAll();
  }

  @Query(() => PcDriver, { name: 'pcDriver' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pcDriverService.findOne(id);
  }

  @Mutation(() => PcDriver)
  updatePcDriver(@Args('updatePcDriverInput') updatePcDriverInput: UpdatePcDriverInput) {
    return this.pcDriverService.update(updatePcDriverInput.id, updatePcDriverInput);
  }

  @Mutation(() => PcDriver)
  removePcDriver(@Args('id', { type: () => Int }) id: number) {
    return this.pcDriverService.remove(id);
  }
}
