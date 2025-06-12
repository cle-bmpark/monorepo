import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

/** PC 종류: MAIN, SPARE */
export enum BrainEnum {
  Main = 'MAIN',
  Spare = 'SPARE',
}

export type CpuStatus = {
  __typename?: 'CpuStatus';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** CPU 이름: i7-00... */
  name: Scalars['String']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** CPU 사용량 단위: % */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** CPU 사용량 */
  usage: Scalars['Float']['output'];
};

export type CreateCpuStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateDriverInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateGpuStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateLineInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateNetworkStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreatePcDriverInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreatePcInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreatePcProgramInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreatePositionInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateProcessInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateProgramInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateRamStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateStorageStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateTempStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Driver = {
  __typename?: 'Driver';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 드라이버 버전 업데이트 일시 */
  driverUpdatedAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 이미지 URL */
  image: Scalars['String']['output'];
  /** 드라이버명 */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** 버전 정보 */
  version: Scalars['String']['output'];
};

export type GpuStatus = {
  __typename?: 'GpuStatus';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** GPU 명 */
  name: Scalars['String']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** GPU 사용량 단위: % */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** GPU 사용량 */
  usage: Scalars['Float']['output'];
};

export type Line = {
  __typename?: 'Line';
  /** Line 코드: ONE, TWO, PANORAMA */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Line 이름: ONE, TWO, PANORAMA */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCpuStatus: CpuStatus;
  createDriver: Driver;
  createGpuStatus: GpuStatus;
  createLine: Line;
  createNetworkStatus: NetworkStatus;
  createPc: Pc;
  createPcDriver: PcDriver;
  createPcProgram: PcProgram;
  createPosition: Position;
  createProcess: Process;
  createProgram: Program;
  createRamStatus: RamStatus;
  createStorageStatus: StorageStatus;
  createTempStatus: TempStatus;
  removeCpuStatus: CpuStatus;
  removeDriver: Driver;
  removeGpuStatus: GpuStatus;
  removeLine: Line;
  removeNetworkStatus: NetworkStatus;
  removePc: Pc;
  removePcDriver: PcDriver;
  removePcProgram: PcProgram;
  removePosition: Position;
  removeProcess: Process;
  removeProgram: Program;
  removeRamStatus: RamStatus;
  removeStorageStatus: StorageStatus;
  removeTempStatus: TempStatus;
  updateCpuStatus: CpuStatus;
  updateDriver: Driver;
  updateGpuStatus: GpuStatus;
  updateLine: Line;
  updateNetworkStatus: NetworkStatus;
  updatePc: Pc;
  updatePcDriver: PcDriver;
  updatePcProgram: PcProgram;
  updatePosition: Position;
  updateProcess: Process;
  updateProgram: Program;
  updateRamStatus: RamStatus;
  updateStorageStatus: StorageStatus;
  updateTempStatus: TempStatus;
};

export type MutationCreateCpuStatusArgs = {
  createCpuStatusInput: CreateCpuStatusInput;
};

export type MutationCreateDriverArgs = {
  createDriverInput: CreateDriverInput;
};

export type MutationCreateGpuStatusArgs = {
  createGpuStatusInput: CreateGpuStatusInput;
};

export type MutationCreateLineArgs = {
  createLineInput: CreateLineInput;
};

export type MutationCreateNetworkStatusArgs = {
  createNetworkStatusInput: CreateNetworkStatusInput;
};

export type MutationCreatePcArgs = {
  createPcInput: CreatePcInput;
};

export type MutationCreatePcDriverArgs = {
  createPcDriverInput: CreatePcDriverInput;
};

export type MutationCreatePcProgramArgs = {
  createPcProgramInput: CreatePcProgramInput;
};

export type MutationCreatePositionArgs = {
  createPositionInput: CreatePositionInput;
};

export type MutationCreateProcessArgs = {
  createProcessInput: CreateProcessInput;
};

export type MutationCreateProgramArgs = {
  createProgramInput: CreateProgramInput;
};

export type MutationCreateRamStatusArgs = {
  createRamStatusInput: CreateRamStatusInput;
};

export type MutationCreateStorageStatusArgs = {
  createStorageStatusInput: CreateStorageStatusInput;
};

export type MutationCreateTempStatusArgs = {
  createTempStatusInput: CreateTempStatusInput;
};

export type MutationRemoveCpuStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveDriverArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveGpuStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveLineArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveNetworkStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemovePcArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemovePcDriverArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemovePcProgramArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemovePositionArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveProcessArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveProgramArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveRamStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveStorageStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveTempStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationUpdateCpuStatusArgs = {
  updateCpuStatusInput: UpdateCpuStatusInput;
};

export type MutationUpdateDriverArgs = {
  updateDriverInput: UpdateDriverInput;
};

export type MutationUpdateGpuStatusArgs = {
  updateGpuStatusInput: UpdateGpuStatusInput;
};

export type MutationUpdateLineArgs = {
  updateLineInput: UpdateLineInput;
};

export type MutationUpdateNetworkStatusArgs = {
  updateNetworkStatusInput: UpdateNetworkStatusInput;
};

export type MutationUpdatePcArgs = {
  updatePcInput: UpdatePcInput;
};

export type MutationUpdatePcDriverArgs = {
  updatePcDriverInput: UpdatePcDriverInput;
};

export type MutationUpdatePcProgramArgs = {
  updatePcProgramInput: UpdatePcProgramInput;
};

export type MutationUpdatePositionArgs = {
  updatePositionInput: UpdatePositionInput;
};

export type MutationUpdateProcessArgs = {
  updateProcessInput: UpdateProcessInput;
};

export type MutationUpdateProgramArgs = {
  updateProgramInput: UpdateProgramInput;
};

export type MutationUpdateRamStatusArgs = {
  updateRamStatusInput: UpdateRamStatusInput;
};

export type MutationUpdateStorageStatusArgs = {
  updateStorageStatusInput: UpdateStorageStatusInput;
};

export type MutationUpdateTempStatusArgs = {
  updateTempStatusInput: UpdateTempStatusInput;
};

export type NetworkStatus = {
  __typename?: 'NetworkStatus';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** 송신량 */
  receive: Scalars['Float']['output'];
  /** 수신량 */
  send: Scalars['Float']['output'];
  /** Network 사용량 단위: Kbps */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Pc = {
  __typename?: 'Pc';
  /** 런처 접속 서버 주소 */
  activeServer: Scalars['String']['output'];
  /** AnyDesk IP 주소 */
  anydeskIp: Scalars['String']['output'];
  /** PC 종류: MAIN, SPARE */
  brain: BrainEnum;
  /** CPU 상태 정보 테이블 ID */
  cpuStatus: CpuStatus;
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** GPU 상태 정보 테이블 ID */
  gpuStatus: GpuStatus;
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** PC 로컬 IP 주소 */
  ipv4: Scalars['String']['output'];
  /** 라이선스 여부 */
  isLicense: Scalars['Boolean']['output'];
  /** 네트워크 접속 여부 */
  isNetwork: Scalars['Boolean']['output'];
  /** 프로그램 작동 여부 */
  isProgram: Scalars['Boolean']['output'];
  /** 런처 업데이트 일시 */
  launcherUpdatedAt: Scalars['DateTime']['output'];
  /** 라인 객체 정보 (관계 필드) */
  line: Line;
  /** 라인 고유 ID */
  lineId: Scalars['Int']['output'];
  /** Network 상태 정보 테이블 ID */
  networkStatus: NetworkStatus;
  /** 설치된 드라이버 정보 (중간 엔티티) */
  pcDrivers: Array<PcDriver>;
  /** 설치된 프로그램 정보 (중간 엔티티) */
  pcPrograms: Array<PcProgram>;
  /** 방향 객체 정보 (관계 필드) */
  position: Position;
  /** 방향 고유 ID */
  positionId: Scalars['Int']['output'];
  /** 공정 객체 정보 (관계 필드) */
  process: Process;
  /** 공정 고유 ID */
  processId: Scalars['Int']['output'];
  /** RAM 상태 정보 테이블 ID */
  ramStatus: RamStatus;
  /** PC 시리얼 번호 */
  serialNumber: Scalars['String']['output'];
  /** Storage 상태 정보 테이블 ID */
  storageStatus: StorageStatus;
  /** 온도 상태 정보 테이블 ID */
  tempStatus: TempStatus;
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type PcDriver = {
  __typename?: 'PcDriver';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 관련 Driver 정보 (관계 필드) */
  driver: Driver;
  /** Driver 고유 ID (외래 키) */
  driverId: Scalars['Int']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type PcProgram = {
  __typename?: 'PcProgram';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** 관련 Program 정보 (관계 필드) */
  program: Program;
  /** Program 고유 ID (외래 키) */
  programId: Scalars['Int']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Position = {
  __typename?: 'Position';
  /** Position 코드: FRONT, REAR, RIGHT_HAND, LEFT_HAND */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Line 이름: FRONT, REAR, RIGHT_HAND, LEFT_HAND */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Process = {
  __typename?: 'Process';
  /** Process 코드: GLASS INSPECT, SEALER INSPECT, PRIMER INSPECT, WHEEL INSPECT */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Process 이름: GLASS INSPECT, SEALER INSPECT, PRIMER INSPECT, WHEEL INSPECT */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Program = {
  __typename?: 'Program';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 이미지 URL */
  image: Scalars['String']['output'];
  /** 프로그램명 */
  name: Scalars['String']['output'];
  /** 프로그램 버전 업데이트 일시 */
  programUpdatedAt: Scalars['DateTime']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** 버전 정보 */
  version: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cpuStatus: CpuStatus;
  driver: Driver;
  gpuStatus: GpuStatus;
  line: Line;
  networkStatus: NetworkStatus;
  /** 특정 ID의 PC 정보 조회 */
  pc: Pc;
  pcDriver: PcDriver;
  pcProgram: PcProgram;
  /** 모든 PC 목록 조회 */
  pcs: Array<Pc>;
  position: Position;
  process: Process;
  program: Program;
  ramStatus: RamStatus;
  storageStatus: StorageStatus;
  tempStatus: TempStatus;
};

export type QueryCpuStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryDriverArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGpuStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryLineArgs = {
  id: Scalars['Int']['input'];
};

export type QueryNetworkStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcDriverArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcProgramArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPositionArgs = {
  id: Scalars['Int']['input'];
};

export type QueryProcessArgs = {
  id: Scalars['Int']['input'];
};

export type QueryProgramArgs = {
  id: Scalars['Int']['input'];
};

export type QueryRamStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryStorageStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTempStatusArgs = {
  id: Scalars['Int']['input'];
};

export type RamStatus = {
  __typename?: 'RamStatus';
  /** RAM 평균 사용량 */
  average: Scalars['Float']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** RAM 최근 사용량 */
  current: Scalars['Float']['output'];
  /** RAM 최고 사용량 */
  highest: Scalars['Float']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** RAM 최저 사용량 */
  lowest: Scalars['Float']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** RAM 총 용량 */
  total: Scalars['Float']['output'];
  /** CPU 사용량 단위: GB */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type StorageStatus = {
  __typename?: 'StorageStatus';
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Storage 이름: C, D... */
  name: Scalars['String']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** Storage 총 용량 */
  total: Scalars['Float']['output'];
  /** Storage 사용량 단위: GB */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** Storage 사용량 */
  usage: Scalars['Float']['output'];
};

export type TempStatus = {
  __typename?: 'TempStatus';
  /** 평균 온도 */
  average: Scalars['Float']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 최근 온도 */
  current: Scalars['Float']['output'];
  /** 최고 온도 */
  highest: Scalars['Float']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 최저 온도 */
  lowest: Scalars['Float']['output'];
  /** 관련 PC 정보 (관계 필드) */
  pc: Pc;
  /** PC 고유 ID (외래 키) */
  pcId: Scalars['Int']['output'];
  /** 온도 단위: °C */
  unit: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCpuStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateDriverInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateGpuStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateLineInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateNetworkStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePcDriverInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePcInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePcProgramInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdatePositionInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateProcessInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateProgramInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateRamStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateStorageStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTempStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type GetPcsAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetPcsAllQuery = {
  __typename?: 'Query';
  pcs: Array<{
    __typename?: 'Pc';
    id: number;
    serialNumber: string;
    lineId: number;
    positionId: number;
    processId: number;
    brain: BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    anydeskIp: string;
    ipv4: string;
    activeServer: string;
    launcherUpdatedAt: any;
    createdAt: any;
    updatedAt: any;
    line: {
      __typename?: 'Line';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    position: {
      __typename?: 'Position';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    process: {
      __typename?: 'Process';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    cpuStatus: {
      __typename?: 'CpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    gpuStatus: {
      __typename?: 'GpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    networkStatus: {
      __typename?: 'NetworkStatus';
      id: number;
      pcId: number;
      send: number;
      receive: number;
      createdAt: any;
      updatedAt: any;
    };
    ramStatus: {
      __typename?: 'RamStatus';
      id: number;
      pcId: number;
      total: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    storageStatus: {
      __typename?: 'StorageStatus';
      id: number;
      pcId: number;
      name: string;
      total: number;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    tempStatus: {
      __typename?: 'TempStatus';
      id: number;
      pcId: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      id: number;
      pcId: number;
      driverId: number;
      createdAt: any;
      updatedAt: any;
      driver: {
        __typename?: 'Driver';
        id: number;
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: any;
        createdAt: any;
        updatedAt: any;
      };
    }>;
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      id: number;
      pcId: number;
      programId: number;
      createdAt: any;
      updatedAt: any;
      program: {
        __typename?: 'Program';
        id: number;
        image: string;
        name: string;
        version: string;
        programUpdatedAt: any;
        createdAt: any;
        updatedAt: any;
      };
    }>;
  }>;
};

export type GetPcAllQueryVariables = Exact<{ [key: string]: never }>;

export type GetPcAllQuery = {
  __typename?: 'Query';
  pc: {
    __typename?: 'Pc';
    id: number;
    serialNumber: string;
    lineId: number;
    positionId: number;
    processId: number;
    brain: BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    anydeskIp: string;
    ipv4: string;
    activeServer: string;
    launcherUpdatedAt: any;
    createdAt: any;
    updatedAt: any;
    line: {
      __typename?: 'Line';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    position: {
      __typename?: 'Position';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    process: {
      __typename?: 'Process';
      id: number;
      code: string;
      name: string;
      createdAt: any;
      updatedAt: any;
    };
    cpuStatus: {
      __typename?: 'CpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    gpuStatus: {
      __typename?: 'GpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    networkStatus: {
      __typename?: 'NetworkStatus';
      id: number;
      pcId: number;
      send: number;
      receive: number;
      createdAt: any;
      updatedAt: any;
    };
    ramStatus: {
      __typename?: 'RamStatus';
      id: number;
      pcId: number;
      total: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    storageStatus: {
      __typename?: 'StorageStatus';
      id: number;
      pcId: number;
      name: string;
      total: number;
      usage: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    tempStatus: {
      __typename?: 'TempStatus';
      id: number;
      pcId: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: any;
      updatedAt: any;
    };
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      id: number;
      pcId: number;
      driverId: number;
      createdAt: any;
      updatedAt: any;
      driver: {
        __typename?: 'Driver';
        id: number;
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: any;
        createdAt: any;
        updatedAt: any;
      };
    }>;
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      id: number;
      pcId: number;
      programId: number;
      createdAt: any;
      updatedAt: any;
      program: {
        __typename?: 'Program';
        id: number;
        image: string;
        name: string;
        version: string;
        programUpdatedAt: any;
        createdAt: any;
        updatedAt: any;
      };
    }>;
  };
};

export type GetPcListQueryVariables = Exact<{ [key: string]: never }>;

export type GetPcListQuery = {
  __typename?: 'Query';
  pcs: Array<{
    __typename?: 'Pc';
    id: number;
    serialNumber: string;
    brain: BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    anydeskIp: string;
    launcherUpdatedAt: any;
    line: { __typename?: 'Line'; name: string };
    position: { __typename?: 'Position'; name: string };
    process: { __typename?: 'Process'; name: string };
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      program: { __typename?: 'Program'; image: string; name: string; version: string };
    }>;
  }>;
};

export const GetPcsAllDocument = gql`
  query GetPcsAll {
    pcs {
      id
      serialNumber
      lineId
      positionId
      processId
      brain
      isLicense
      isNetwork
      isProgram
      anydeskIp
      ipv4
      activeServer
      launcherUpdatedAt
      createdAt
      updatedAt
      line {
        id
        code
        name
        createdAt
        updatedAt
      }
      position {
        id
        code
        name
        createdAt
        updatedAt
      }
      process {
        id
        code
        name
        createdAt
        updatedAt
      }
      cpuStatus {
        id
        pcId
        name
        usage
        unit
        createdAt
        updatedAt
      }
      gpuStatus {
        id
        pcId
        name
        usage
        unit
        createdAt
        updatedAt
      }
      networkStatus {
        id
        pcId
        send
        receive
        createdAt
        updatedAt
      }
      ramStatus {
        id
        pcId
        total
        current
        average
        lowest
        highest
        unit
        createdAt
        updatedAt
      }
      storageStatus {
        id
        pcId
        name
        total
        usage
        unit
        createdAt
        updatedAt
      }
      tempStatus {
        id
        pcId
        current
        average
        lowest
        highest
        unit
        createdAt
        updatedAt
      }
      pcDrivers {
        id
        pcId
        driverId
        createdAt
        updatedAt
        driver {
          id
          image
          name
          version
          driverUpdatedAt
          createdAt
          updatedAt
        }
      }
      pcPrograms {
        id
        pcId
        programId
        createdAt
        updatedAt
        program {
          id
          image
          name
          version
          programUpdatedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useGetPcsAllQuery__
 *
 * To run a query within a React component, call `useGetPcsAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcsAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcsAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPcsAllQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcsAllQuery, GetPcsAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcsAllQuery, GetPcsAllQueryVariables>(GetPcsAllDocument, options);
}
export function useGetPcsAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcsAllQuery, GetPcsAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcsAllQuery, GetPcsAllQueryVariables>(GetPcsAllDocument, options);
}
export function useGetPcsAllSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcsAllQuery, GetPcsAllQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcsAllQuery, GetPcsAllQueryVariables>(
    GetPcsAllDocument,
    options,
  );
}
export type GetPcsAllQueryHookResult = ReturnType<typeof useGetPcsAllQuery>;
export type GetPcsAllLazyQueryHookResult = ReturnType<typeof useGetPcsAllLazyQuery>;
export type GetPcsAllSuspenseQueryHookResult = ReturnType<typeof useGetPcsAllSuspenseQuery>;
export type GetPcsAllQueryResult = Apollo.QueryResult<GetPcsAllQuery, GetPcsAllQueryVariables>;
export const GetPcAllDocument = gql`
  query GetPcAll {
    pc(id: 1) {
      id
      serialNumber
      lineId
      positionId
      processId
      brain
      isLicense
      isNetwork
      isProgram
      anydeskIp
      ipv4
      activeServer
      launcherUpdatedAt
      createdAt
      updatedAt
      line {
        id
        code
        name
        createdAt
        updatedAt
      }
      position {
        id
        code
        name
        createdAt
        updatedAt
      }
      process {
        id
        code
        name
        createdAt
        updatedAt
      }
      cpuStatus {
        id
        pcId
        name
        usage
        unit
        createdAt
        updatedAt
      }
      gpuStatus {
        id
        pcId
        name
        usage
        unit
        createdAt
        updatedAt
      }
      networkStatus {
        id
        pcId
        send
        receive
        createdAt
        updatedAt
      }
      ramStatus {
        id
        pcId
        total
        current
        average
        lowest
        highest
        unit
        createdAt
        updatedAt
      }
      storageStatus {
        id
        pcId
        name
        total
        usage
        unit
        createdAt
        updatedAt
      }
      tempStatus {
        id
        pcId
        current
        average
        lowest
        highest
        unit
        createdAt
        updatedAt
      }
      pcDrivers {
        id
        pcId
        driverId
        createdAt
        updatedAt
        driver {
          id
          image
          name
          version
          driverUpdatedAt
          createdAt
          updatedAt
        }
      }
      pcPrograms {
        id
        pcId
        programId
        createdAt
        updatedAt
        program {
          id
          image
          name
          version
          programUpdatedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * __useGetPcAllQuery__
 *
 * To run a query within a React component, call `useGetPcAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPcAllQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcAllQuery, GetPcAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcAllQuery, GetPcAllQueryVariables>(GetPcAllDocument, options);
}
export function useGetPcAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcAllQuery, GetPcAllQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcAllQuery, GetPcAllQueryVariables>(GetPcAllDocument, options);
}
export function useGetPcAllSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcAllQuery, GetPcAllQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcAllQuery, GetPcAllQueryVariables>(GetPcAllDocument, options);
}
export type GetPcAllQueryHookResult = ReturnType<typeof useGetPcAllQuery>;
export type GetPcAllLazyQueryHookResult = ReturnType<typeof useGetPcAllLazyQuery>;
export type GetPcAllSuspenseQueryHookResult = ReturnType<typeof useGetPcAllSuspenseQuery>;
export type GetPcAllQueryResult = Apollo.QueryResult<GetPcAllQuery, GetPcAllQueryVariables>;
export const GetPcListDocument = gql`
  query GetPcList {
    pcs {
      id
      serialNumber
      brain
      isLicense
      isNetwork
      isProgram
      anydeskIp
      launcherUpdatedAt
      line {
        name
      }
      position {
        name
      }
      process {
        name
      }
      pcPrograms {
        program {
          image
          name
          version
        }
      }
    }
  }
`;

/**
 * __useGetPcListQuery__
 *
 * To run a query within a React component, call `useGetPcListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPcListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcListQuery, GetPcListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcListQuery, GetPcListQueryVariables>(GetPcListDocument, options);
}
export function useGetPcListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcListQuery, GetPcListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcListQuery, GetPcListQueryVariables>(GetPcListDocument, options);
}
export function useGetPcListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcListQuery, GetPcListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcListQuery, GetPcListQueryVariables>(
    GetPcListDocument,
    options,
  );
}
export type GetPcListQueryHookResult = ReturnType<typeof useGetPcListQuery>;
export type GetPcListLazyQueryHookResult = ReturnType<typeof useGetPcListLazyQuery>;
export type GetPcListSuspenseQueryHookResult = ReturnType<typeof useGetPcListSuspenseQuery>;
export type GetPcListQueryResult = Apollo.QueryResult<GetPcListQuery, GetPcListQueryVariables>;
