import { CreatePcInput } from '@/pc/dto/create-pc.input';
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

  @Query(() => [Pc], { name: 'pcs', description: '모든 PC 목록 조회' })
  findAll() {
    return this.pcService.findAll();
  }

  @Query(() => Pc, { name: 'pc', description: '특정 ID의 PC 정보 조회' })
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
