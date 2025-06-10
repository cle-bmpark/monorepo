import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PcProgram } from 'src/pc_program/entities/pc_program.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Program {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: '이미지 URL' })
  @Column({ nullable: true })
  image?: string;

  @Field(() => String, { description: '프로그램명' })
  @Column()
  name: string;

  @Field(() => String, { description: '버전 정보' })
  @Column({ nullable: true })
  version?: string;

  @Field({ description: '프로그램 버전 업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    nullable: true,
  })
  programUpdatedAt?: Date;

  @Field({ description: '생성 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field({ description: '업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => PcProgram, (pcProgram) => pcProgram.program)
  pcPrograms: PcProgram[];
}
