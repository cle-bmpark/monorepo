import { CreatePcInput } from '@/pc/dto/create-pc.input';
import { FindPcsByIds, FindPcsInput } from '@/pc/dto/find-pc.input';
import { PcPagination } from '@/pc/dto/find-pc.output';
import { UpdatePcInput } from '@/pc/dto/update-pc.input';
import { Pc } from '@/pc/entities/pc.entity';
import { PcService } from '@/pc/pc.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Pc)
export class PcResolver {
  constructor(private readonly pcService: PcService) {}

  @Mutation(() => Pc)
  createPc(@Args('createPcInput') createPcInput: CreatePcInput) {
    return this.pcService.create(createPcInput);
  }

  @Query(() => PcPagination, {
    name: 'pcList',
    description: 'PC 목록을 필터 및 검색 조건으로 조회',
  })
  findAll(@Args('input', { nullable: true, type: () => FindPcsInput }) input?: FindPcsInput) {
    return this.pcService.findAll(input);
  }

  @Query(() => Pc, { name: 'pcDetail', description: '특정 ID의 PC 정보 조회' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pcService.findOne(id);
  }

  @Query(() => [Pc], { name: 'pcsByIds', description: '여러 PC를 ID로 조회' })
  findByIds(@Args('input') input: FindPcsByIds): Promise<Pc[]> {
    return this.pcService.findByIds(input.ids);
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
