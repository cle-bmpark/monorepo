import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pc } from 'src/pc/entities/pc.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Line {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Line 코드: ONE, TWO, PANORAMA' })
  @Column({ unique: true })
  code: string;

  @Field(() => String, { description: 'Line 이름: ONE, TWO, PANORAMA' })
  @Column()
  name: string;

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

  // Pc 엔티티와의 1:N 관계 설정: 데이터 모델링
  @OneToMany(() => Pc, (pc) => pc.line)
  pcs: Pc[];
}
