import { CreateProgramInput } from '@/program/dto/create-program.input';
import { UpdateProgramInput } from '@/program/dto/update-program.input';
import { Program } from '@/program/entities/program.entity';
import { ProgramService } from '@/program/program.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Mutation(() => Program)
  createProgram(@Args('createProgramInput') createProgramInput: CreateProgramInput) {
    return this.programService.create(createProgramInput);
  }

  @Query(() => [Program], { name: 'programList', description: '모든 Program 목록 조회' })
  findAll() {
    return this.programService.findAll();
  }

  @Query(() => Program, { name: 'programDetail', description: '특정 ID의 Program 정보 조회' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.programService.findOne(id);
  }

  @Mutation(() => Program)
  updateProgram(@Args('updateProgramInput') updateProgramInput: UpdateProgramInput) {
    return this.programService.update(updateProgramInput.id, updateProgramInput);
  }

  @Mutation(() => Program)
  removeProgram(@Args('id', { type: () => Int }) id: number) {
    return this.programService.remove(id);
  }
}
