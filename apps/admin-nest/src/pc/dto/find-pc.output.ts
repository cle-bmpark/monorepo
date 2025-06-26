import { Pc } from '@/pc/entities/pc.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PcPagination {
  @Field(() => [Pc], { description: '현재 페이지의 PC 목록 데이터' })
  items: Pc[];

  @Field(() => Int, { description: '전체 PC 항목의 총 개수' })
  totalCount: number;

  @Field(() => Int, { description: '전체 페이지 수', nullable: true })
  totalPages?: number;

  @Field(() => Boolean, { description: '다음 페이지가 있는지 여부' })
  hasNextPage: boolean;
}
