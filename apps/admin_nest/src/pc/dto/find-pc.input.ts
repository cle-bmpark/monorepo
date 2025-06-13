import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}

@InputType()
export class FindPcsByIds {
  // pc id 배열 검색
  @Field(() => [Int], { description: '조회할 PC ID 목록' })
  @IsArray()
  @IsNotEmpty({ each: true })
  ids: number[];
}
