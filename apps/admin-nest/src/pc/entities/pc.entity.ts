import { CpuStatus } from '@/cpu-status/entities/cpu-status.entity';
import { GpuStatus } from '@/gpu-status/entities/gpu-status.entity';
import { Line } from '@/line/entities/line.entity';
import { NetworkStatus } from '@/network-status/entities/network-status.entity';
import { PcDriver } from '@/pc-driver/entities/pc-driver.entity';
import { PcProgram } from '@/pc-program/entities/pc-program.entity';
import { Position } from '@/position/entities/position.entity';
import { Process } from '@/process/entities/process.entity';
import { RamStatus } from '@/ram-status/entities/ram-status.entity';
import { StorageStatus } from '@/storage-status/entities/storage-status.entity';
import { TempStatus } from '@/temp-status/entities/temp-status.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BrainEnum } from '../type/enum';

@ObjectType()
@Entity()
export class Pc {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'PC 시리얼 번호' })
  @Column({ unique: true })
  serialNumber: string;

  @Field(() => Int, { description: '라인 고유 ID' })
  @Column()
  lineId: number;

  @Field(() => Line, { description: '라인 객체 정보 (관계 필드)' })
  @ManyToOne(() => Line, (line) => line.pcs, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'lineId' })
  line: Line;

  @Field(() => Int, { description: '방향 고유 ID' })
  @Column()
  positionId: number;

  @Field(() => Position, { description: '방향 객체 정보 (관계 필드)' })
  @ManyToOne(() => Position, (position) => position.pcs, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'positionId' })
  position: Position;

  @Field(() => Int, { description: '공정 고유 ID' })
  @Column()
  processId: number;

  @Field(() => Process, { description: '공정 객체 정보 (관계 필드)' })
  @ManyToOne(() => Process, (process) => process.pcs, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'processId' })
  process: Process;

  @Field(() => BrainEnum, { description: 'PC 종류: MAIN, SPARE' })
  @Column({
    type: 'enum',
    enum: BrainEnum,
    default: BrainEnum.MAIN,
  })
  brain: BrainEnum;

  @Field({ description: '라이선스 여부' })
  @Column()
  isLicense: boolean;

  @Field({ description: '네트워크 접속 여부' })
  @Column()
  isNetwork: boolean;

  @Field({ description: '프로그램 작동 여부' })
  @Column()
  isProgram: boolean;

  @Field(() => String, { description: 'AnyDesk IP 주소' })
  @Column()
  anydeskIp: string;

  @Field(() => String, { description: 'PC 로컬 IP 주소' })
  @Column()
  ipv4: string;

  @Field(() => String, { description: '런처 접속 서버 주소' })
  @Column()
  activeServer: string;

  @Field(() => CpuStatus, { description: 'CPU 상태 정보 테이블 ID' })
  @OneToOne(() => CpuStatus, (cpuStatus) => cpuStatus.pc, {
    nullable: true,
  })
  cpuStatus?: CpuStatus;

  @Field(() => GpuStatus, { description: 'GPU 상태 정보 테이블 ID' })
  @OneToOne(() => GpuStatus, (gpuStatus) => gpuStatus.pc, {
    nullable: true,
  })
  gpuStatus?: GpuStatus;

  @Field(() => NetworkStatus, { description: 'Network 상태 정보 테이블 ID' })
  @OneToOne(() => NetworkStatus, (networkStatus) => networkStatus.pc, {
    nullable: true,
  })
  networkStatus?: NetworkStatus;

  @Field(() => RamStatus, { description: 'RAM 상태 정보 테이블 ID' })
  @OneToOne(() => RamStatus, (ramStatus) => ramStatus.pc, {
    nullable: true,
  })
  ramStatus?: RamStatus;

  @Field(() => [StorageStatus], { description: 'Storage 상태 정보 테이블 ID' })
  @OneToMany(() => StorageStatus, (storageStatus) => storageStatus.pc)
  storageStatuses?: StorageStatus[];

  @Field(() => TempStatus, { description: '온도 상태 정보 테이블 ID' })
  @OneToOne(() => TempStatus, (tempStatus) => tempStatus.pc, {
    nullable: true,
  })
  tempStatus?: TempStatus;

  @Field(() => [PcDriver], { description: '설치된 드라이버 정보 (중간 엔티티)' })
  @OneToMany(() => PcDriver, (pcDriver) => pcDriver.pc)
  pcDrivers: PcDriver[];

  @Field(() => [PcProgram], { description: '설치된 프로그램 정보 (중간 엔티티)' })
  @OneToMany(() => PcProgram, (pcProgram) => pcProgram.pc)
  pcPrograms: PcProgram[];

  @Field({ description: '런처 업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    nullable: true,
  })
  launcherUpdatedAt: string;

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
}
