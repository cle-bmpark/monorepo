import { CreateLineInput } from '@/line/dto/create-line.input';
import { UpdateLineInput } from '@/line/dto/update-line.input';
import { Line } from '@/line/entities/line.entity';
import { LineService } from '@/line/line.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Line)
export class LineResolver {
  constructor(private readonly lineService: LineService) {}

  @Mutation(() => Line)
  createLine(@Args('createLineInput') createLineInput: CreateLineInput) {
    return this.lineService.create(createLineInput);
  }

  @Query(() => [Line], { name: 'lineList', description: '모든 Line 목록 조회' })
  findAll() {
    return this.lineService.findAll();
  }

  @Query(() => Line, { name: 'lineDetail', description: '특정 ID의 Line 정보 조회' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lineService.findOne(id);
  }

  @Mutation(() => Line)
  updateLine(@Args('updateLineInput') updateLineInput: UpdateLineInput) {
    return this.lineService.update(updateLineInput.id, updateLineInput);
  }

  @Mutation(() => Line)
  removeLine(@Args('id', { type: () => Int }) id: number) {
    return this.lineService.remove(id);
  }
}
