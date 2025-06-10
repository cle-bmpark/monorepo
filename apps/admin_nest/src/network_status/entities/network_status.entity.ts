import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Pc } from 'src/pc/entities/pc.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class NetworkStatus {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'PC 고유 ID (외래 키)' })
  @Column({ unique: true })
  pcId: number;

  @Field(() => Pc, { description: '관련 PC 정보 (관계 필드)' })
  @OneToOne(() => Pc, (pc) => pc.networkStatus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pcId' })
  pc: Pc;

  @Field(() => Float, { description: '수신량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  send?: number;

  @Field(() => Float, { description: '송신량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  receive?: number;

  @Field(() => String, { description: 'Network 사용량 단위: Kbps' })
  @Column({ default: 'Kbps' })
  unit: string;

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
