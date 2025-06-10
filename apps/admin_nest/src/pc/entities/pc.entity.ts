import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CpuStatus } from 'src/cpu_status/entities/cpu_status.entity';
import { GpuStatus } from 'src/gpu_status/entities/gpu_status.entity';
import { Line } from 'src/line/entities/line.entity';
import { NetworkStatus } from 'src/network_status/entities/network_status.entity';
import { PcDriver } from 'src/pc_driver/entities/pc_driver.entity';
import { PcProgram } from 'src/pc_program/entities/pc_program.entity';
import { Position } from 'src/position/entities/position.entity';
import { Process } from 'src/process/entities/process.entity';
import { RamStatus } from 'src/ram_status/entities/ram_status.entity';
import { StorageStatus } from 'src/storage_status/entities/storage_status.entity';
import { TempStatus } from 'src/temp_status/entities/temp_status.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum BrainEnum {
  MAIN = 'MAIN',
  SPARE = 'SPARE',
}

registerEnumType(BrainEnum, {
  name: 'BrainEnum',
  description: 'PC 종류: MAIN, SPARE',
});

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
  @OneToOne(() => CpuStatus, (gpuStatus) => gpuStatus.pcId, {
    nullable: true,
  })
  cpuStatus?: CpuStatus;

  @Field(() => GpuStatus, { description: 'GPU 상태 정보 테이블 ID' })
  @OneToOne(() => GpuStatus, (gpuStatus) => gpuStatus.pcId, {
    nullable: true,
  })
  gpuStatus?: GpuStatus;

  @Field(() => NetworkStatus, { description: 'Network 상태 정보 테이블 ID' })
  @OneToOne(() => NetworkStatus, (networkStatus) => networkStatus.pcId, {
    nullable: true,
  })
  networkStatus?: NetworkStatus;

  @Field(() => RamStatus, { description: 'RAM 상태 정보 테이블 ID' })
  @OneToOne(() => RamStatus, (ramStatus) => ramStatus.pcId, {
    nullable: true,
  })
  ramStatus?: RamStatus;

  @Field(() => StorageStatus, { description: 'Storage 상태 정보 테이블 ID' })
  @OneToOne(() => StorageStatus, (storageStatus) => storageStatus.pcId, {
    nullable: true,
  })
  storageStatus?: StorageStatus;

  @Field(() => TempStatus, { description: '온도 상태 정보 테이블 ID' })
  @OneToOne(() => TempStatus, (tempStatus) => tempStatus.pcId, {
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
  launcherUpdatedAt: Date;

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
