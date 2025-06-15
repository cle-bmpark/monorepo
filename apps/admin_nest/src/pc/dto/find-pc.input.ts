import { BrainEnum, PcSortField, SortOrder } from '@/pc/type/enum';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

@InputType()
export class FindPcsInput {
  // search
  @Field(() => String, {
    nullable: true,
    description:
      'serial number, brain(main, spare), anydeskIp, line, position, process, driver, program 검색어',
  })
  @IsOptional()
  @IsString()
  searchQuery?: string;

  // sort
  @Field(() => PcSortField, { nullable: true, description: '정렬 기준 필드' })
  orderBy?: PcSortField;

  @Field(() => SortOrder, {
    nullable: true,
    defaultValue: SortOrder.ASC,
    description: '정렬 순서 (ASC: 오름차순, DESC: 내림차순)',
  })
  sortOrder?: SortOrder;

  // filter
  @Field(() => Int, { nullable: true, description: '라인 고유 ID' })
  lineId?: number;

  @Field(() => Int, { nullable: true, description: '방향 고유 ID' })
  positionId?: number;

  @Field(() => Int, { nullable: true, description: '공정 고유 ID' })
  processId?: number;

  @Field(() => BrainEnum, { nullable: true, description: 'PC 종류: MAIN, SPARE' })
  brain?: BrainEnum;

  @Field(() => Boolean, { nullable: true, description: '라이선스 여부' })
  isLicense?: boolean;

  @Field(() => Boolean, { nullable: true, description: '네트워크 접속 여부' })
  isNetwork?: boolean;

  @Field(() => Boolean, { nullable: true, description: '프로그램 작동 여부' })
  isProgram?: boolean;

  @Field(() => String, {
    nullable: true,
    description: '런처 업데이트 시작 일시 (ISO 8601 형식: YYYY-MM-DD)',
  })
  @IsOptional()
  @IsDateString()
  launcherUpdatedAtStart?: string;

  @Field(() => String, {
    nullable: true,
    description: '런처 업데이트 종료 일시 (ISO 8601 형식: YYYY-MM-DD)',
  })
  @IsOptional()
  @IsDateString()
  launcherUpdatedAtEnd?: string;

  // pagination
  @Field(() => Int, {
    nullable: true,
    defaultValue: 1,
    description: '현재 페이지 번호 (1부터 시작)',
  })
  @IsOptional()
  @Min(1) // 최소 1페이지
  page?: number;

  @Field(() => Int, { nullable: true, defaultValue: 10, description: '페이지당 항목 수' })
  @IsOptional()
  @Min(1) // 최소 1개 이상
  @Max(100) // 최대 100개
  pageSize?: number;
}

@InputType()
export class FindPcsByIds {
  // pc id 배열 검색
  @Field(() => [Int], { description: '조회할 PC ID 목록' })
  @IsArray()
  @IsNotEmpty({ each: true })
  ids: number[];
}
