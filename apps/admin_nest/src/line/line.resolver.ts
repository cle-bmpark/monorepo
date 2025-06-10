import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLineInput } from './dto/create-line.input';
import { UpdateLineInput } from './dto/update-line.input';
import { Line } from './entities/line.entity';
import { LineService } from './line.service';

@Resolver(() => Line)
export class LineResolver {
  constructor(private readonly lineService: LineService) {}

  @Mutation(() => Line)
  createLine(@Args('createLineInput') createLineInput: CreateLineInput) {
    return this.lineService.create(createLineInput);
  }

  @Query(() => [Line], { name: 'line' })
  findAll() {
    return this.lineService.findAll();
  }

  @Query(() => Line, { name: 'line' })
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
