import { PcDriver } from '@/pc-driver/entities/pc-driver.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Driver {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: '이미지 URL' })
  @Column({
    nullable: true,
  })
  image?: string;

  @Field(() => String, { description: '드라이버명' })
  @Column()
  name: string;

  @Field(() => String, { description: '버전 정보' })
  @Column({
    nullable: true,
  })
  version?: string;

  @Field({ description: '드라이버 버전 업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    nullable: true,
  })
  driverUpdatedAt?: string;

  @Field({ description: '생성 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Field({ description: '업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;

  @OneToMany(() => PcDriver, (pcDriver) => pcDriver.driver)
  pcDrivers: PcDriver[];
}
