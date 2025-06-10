import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePcProgramInput } from './dto/create-pc_program.input';
import { UpdatePcProgramInput } from './dto/update-pc_program.input';
import { PcProgram } from './entities/pc_program.entity';
import { PcProgramService } from './pc_program.service';

@Resolver(() => PcProgram)
export class PcProgramResolver {
  constructor(private readonly pcProgramService: PcProgramService) {}

  @Mutation(() => PcProgram)
  createPcProgram(@Args('createPcProgramInput') createPcProgramInput: CreatePcProgramInput) {
    return this.pcProgramService.create(createPcProgramInput);
  }

  @Query(() => [PcProgram], { name: 'pcProgram' })
  findAll() {
    return this.pcProgramService.findAll();
  }

  @Query(() => PcProgram, { name: 'pcProgram' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pcProgramService.findOne(id);
  }

  @Mutation(() => PcProgram)
  updatePcProgram(@Args('updatePcProgramInput') updatePcProgramInput: UpdatePcProgramInput) {
    return this.pcProgramService.update(updatePcProgramInput.id, updatePcProgramInput);
  }

  @Mutation(() => PcProgram)
  removePcProgram(@Args('id', { type: () => Int }) id: number) {
    return this.pcProgramService.remove(id);
  }
}
