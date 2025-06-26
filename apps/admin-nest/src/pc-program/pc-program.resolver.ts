import { CreatePcProgramInput } from '@/pc-program/dto/create-pc-program.input';
import { UpdatePcProgramInput } from '@/pc-program/dto/update-pc-program.input';
import { PcProgram } from '@/pc-program/entities/pc-program.entity';
import { PcProgramService } from '@/pc-program/pc-program.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => PcProgram)
export class PcProgramResolver {
  constructor(private readonly pcProgramService: PcProgramService) {}

  @Mutation(() => PcProgram)
  createPcProgram(@Args('createPcProgramInput') createPcProgramInput: CreatePcProgramInput) {
    return this.pcProgramService.create(createPcProgramInput);
  }

  @Query(() => [PcProgram], { name: 'pcProgramList', description: '모든 PC Program 목록 조회' })
  findAll() {
    return this.pcProgramService.findAll();
  }

  @Query(() => PcProgram, {
    name: 'pcProgramDetail',
    description: '특정 ID의 PC Program 정보 조회',
  })
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
