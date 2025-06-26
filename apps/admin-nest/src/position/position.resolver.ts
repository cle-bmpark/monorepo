import { CreatePositionInput } from '@/position/dto/create-position.input';
import { UpdatePositionInput } from '@/position/dto/update-position.input';
import { Position } from '@/position/entities/position.entity';
import { PositionService } from '@/position/position.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Position)
export class PositionResolver {
  constructor(private readonly positionService: PositionService) {}

  @Mutation(() => Position)
  createPosition(@Args('createPositionInput') createPositionInput: CreatePositionInput) {
    return this.positionService.create(createPositionInput);
  }

  @Query(() => [Position], { name: 'positionList', description: '모든 Position 목록 조회' })
  findAll() {
    return this.positionService.findAll();
  }

  @Query(() => Position, { name: 'positionDetail', description: '특정 ID의 Position 정보 조회' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.positionService.findOne(id);
  }

  @Mutation(() => Position)
  updatePosition(@Args('updatePositionInput') updatePositionInput: UpdatePositionInput) {
    return this.positionService.update(updatePositionInput.id, updatePositionInput);
  }

  @Mutation(() => Position)
  removePosition(@Args('id', { type: () => Int }) id: number) {
    return this.positionService.remove(id);
  }
}
