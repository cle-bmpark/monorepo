import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pc } from 'src/pc/entities/pc.entity';
import { Program } from 'src/program/entities/program.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class PcProgram {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'PC 고유 ID (외래 키)' })
  @Column()
  pcId: number;

  @Field(() => Pc, { description: '관련 PC 정보 (관계 필드)' })
  @ManyToOne(() => Pc, (pc) => pc.pcPrograms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pcId' })
  pc: Pc;

  @Field(() => Int, { description: 'Program 고유 ID (외래 키)' })
  @Column()
  programId: number;

  @Field(() => Program, { description: '관련 Program 정보 (관계 필드)' })
  @ManyToOne(() => Program, (program) => program.pcPrograms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'programId' })
  program: Program;

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
}
