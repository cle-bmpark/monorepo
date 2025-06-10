import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Driver } from 'src/driver/entities/driver.entity';
import { Pc } from 'src/pc/entities/pc.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class PcDriver {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'PC 고유 ID (외래 키)' })
  @Column()
  pcId: number;

  @Field(() => Pc, { description: '관련 PC 정보 (관계 필드)' })
  @ManyToOne(() => Pc, (pc) => pc.pcDrivers, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pcId' })
  pc: Pc;

  @Field(() => Int, { description: 'Driver 고유 ID (외래 키)' })
  @Column()
  driverId: number;

  @Field(() => Driver, { description: '관련 Driver 정보 (관계 필드)' })
  @ManyToOne(() => Driver, (driver) => driver.pcDrivers, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'driverId' })
  driver: Driver;

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
