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
};

/** PC 종류: MAIN, SPARE */
export enum BrainEnum {
  Main = 'MAIN',
  Spare = 'SPARE',
}

export type CpuStatus = {
  __typename?: 'CpuStatus';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
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
  createdAt: Scalars['String']['output'];
  /** 드라이버 버전 업데이트 일시 */
  driverUpdatedAt: Scalars['String']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 이미지 URL */
  image: Scalars['String']['output'];
  /** 드라이버명 */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
  /** 버전 정보 */
  version: Scalars['String']['output'];
};

export type FindPcsByIds = {
  /** 조회할 PC ID 목록 */
  ids: Array<Scalars['Int']['input']>;
};

export type FindPcsInput = {
  /** PC 종류: MAIN, SPARE */
  brain?: InputMaybe<BrainEnum>;
  /** 라이선스 여부 */
  isLicense?: InputMaybe<Scalars['Boolean']['input']>;
  /** 네트워크 접속 여부 */
  isNetwork?: InputMaybe<Scalars['Boolean']['input']>;
  /** 프로그램 작동 여부 */
  isProgram?: InputMaybe<Scalars['Boolean']['input']>;
  /** 런처 업데이트 종료 일시 (ISO 8601 형식: YYYY-MM-DD) */
  launcherUpdatedAtEnd?: InputMaybe<Scalars['String']['input']>;
  /** 런처 업데이트 시작 일시 (ISO 8601 형식: YYYY-MM-DD) */
  launcherUpdatedAtStart?: InputMaybe<Scalars['String']['input']>;
  /** 라인 고유 ID */
  lineId?: InputMaybe<Scalars['Int']['input']>;
  /** 정렬 기준 필드 */
  orderBy?: InputMaybe<PcSortField>;
  /** 현재 페이지 번호 (1부터 시작) */
  page?: InputMaybe<Scalars['Int']['input']>;
  /** 페이지당 항목 수 */
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  /** 방향 고유 ID */
  positionId?: InputMaybe<Scalars['Int']['input']>;
  /** 공정 고유 ID */
  processId?: InputMaybe<Scalars['Int']['input']>;
  /** serial number, brain(main, spare), anydeskIp, line, position, process, driver, program 검색어 */
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** 정렬 순서 (ASC: 오름차순, DESC: 내림차순) */
  sortOrder?: InputMaybe<SortOrder>;
};

export type GpuStatus = {
  __typename?: 'GpuStatus';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
  /** GPU 사용량 */
  usage: Scalars['Float']['output'];
};

export type Line = {
  __typename?: 'Line';
  /** Line 코드: ONE, TWO, PANORAMA */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Line 이름: ONE, TWO, PANORAMA */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
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
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
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
  createdAt: Scalars['String']['output'];
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
  launcherUpdatedAt: Scalars['String']['output'];
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
  storageStatuses: Array<StorageStatus>;
  /** 온도 상태 정보 테이블 ID */
  tempStatus: TempStatus;
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
};

export type PcDriver = {
  __typename?: 'PcDriver';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
};

export type PcPagination = {
  __typename?: 'PcPagination';
  /** 다음 페이지가 있는지 여부 */
  hasNextPage: Scalars['Boolean']['output'];
  /** 현재 페이지의 PC 목록 데이터 */
  items: Array<Pc>;
  /** 전체 PC 항목의 총 개수 */
  totalCount: Scalars['Int']['output'];
  /** 전체 페이지 수 */
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PcProgram = {
  __typename?: 'PcProgram';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
};

/** PC 목록 정렬 기준 필드 */
export enum PcSortField {
  AnydeskIp = 'ANYDESK_IP',
  Brain = 'BRAIN',
  IsLicense = 'IS_LICENSE',
  IsNetwork = 'IS_NETWORK',
  IsProgram = 'IS_PROGRAM',
  LauncherUpdatedAt = 'LAUNCHER_UPDATED_AT',
  LineId = 'LINE_ID',
  PositionId = 'POSITION_ID',
  ProcessId = 'PROCESS_ID',
  SerialNumber = 'SERIAL_NUMBER',
}

export type Position = {
  __typename?: 'Position';
  /** Position 코드: FRONT, REAR, RIGHT_HAND, LEFT_HAND */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Line 이름: FRONT, REAR, RIGHT_HAND, LEFT_HAND */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
};

export type Process = {
  __typename?: 'Process';
  /** Process 코드: GLASS INSPECT, SEALER INSPECT, PRIMER INSPECT, WHEEL INSPECT */
  code: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** Process 이름: GLASS INSPECT, SEALER INSPECT, PRIMER INSPECT, WHEEL INSPECT */
  name: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
};

export type Program = {
  __typename?: 'Program';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
  /** 고유번호 ID */
  id: Scalars['Int']['output'];
  /** 이미지 URL */
  image: Scalars['String']['output'];
  /** 프로그램명 */
  name: Scalars['String']['output'];
  /** 프로그램 버전 업데이트 일시 */
  programUpdatedAt: Scalars['String']['output'];
  /** 업데이트 일시 */
  updatedAt: Scalars['String']['output'];
  /** 버전 정보 */
  version: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** 특정 ID의 CPU 상태 조회 */
  cpuStatusDetail: CpuStatus;
  /** 모든 CPU 상태 조회 */
  cpuStatusList: Array<CpuStatus>;
  /** 특정 ID의 Driver 정보 조회 */
  driverDetail: Driver;
  /** 모든 Driver 목록 조회 */
  driverList: Array<Driver>;
  /** 특정 ID의 GPU Status 정보 조회 */
  gpuStatusDetail: GpuStatus;
  /** 모든 GPU Status 목록 조회 */
  gpuStatusList: Array<GpuStatus>;
  /** 특정 ID의 Line 정보 조회 */
  lineDetail: Line;
  /** 모든 Line 목록 조회 */
  lineList: Array<Line>;
  /** 특정 ID의 Network Status 정보 조회 */
  networkStatusDetail: NetworkStatus;
  /** 모든 Network Status 목록 조회 */
  networkStatusList: Array<NetworkStatus>;
  /** 특정 ID의 PC 정보 조회 */
  pcDetail: Pc;
  /** 특정 ID의 PC Driver 정보 조회 */
  pcDriverDetail: PcDriver;
  /** 모든 PC Driver 목록 조회 */
  pcDriverList: Array<PcDriver>;
  /** PC 목록을 필터 및 검색 조건으로 조회 */
  pcList: PcPagination;
  /** 특정 ID의 PC Program 정보 조회 */
  pcProgramDetail: PcProgram;
  /** 모든 PC Program 목록 조회 */
  pcProgramList: Array<PcProgram>;
  /** 여러 PC를 ID로 조회 */
  pcsByIds: Array<Pc>;
  /** 특정 ID의 Position 정보 조회 */
  positionDetail: Position;
  /** 모든 Position 목록 조회 */
  positionList: Array<Position>;
  /** 특정 ID의 Process 정보 조회 */
  processDetail: Process;
  /** 모든 Process 목록 조회 */
  processList: Array<Process>;
  /** 특정 ID의 Program 정보 조회 */
  programDetail: Program;
  /** 모든 Program 목록 조회 */
  programList: Array<Program>;
  /** 특정 ID의 Ram Status 정보 조회 */
  ramStatusDetail: RamStatus;
  /** 모든 Ram Status 목록 조회 */
  ramStatusList: Array<RamStatus>;
  storageStatusByPcId?: Maybe<Array<StorageStatus>>;
  /** 특정 ID의 Storage Status 정보 조회 */
  storageStatusDetail: StorageStatus;
  /** 모든 Storage Status 목록 조회 */
  storageStatusList: Array<StorageStatus>;
  /** 특정 ID의 Temp Status 정보 조회 */
  tempStatusDetail: TempStatus;
  /** 모든 Temp Status 목록 조회 */
  tempStatusList: Array<TempStatus>;
};

export type QueryCpuStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryDriverDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryGpuStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryLineDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryNetworkStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcDriverDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcListArgs = {
  input?: InputMaybe<FindPcsInput>;
};

export type QueryPcProgramDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryPcsByIdsArgs = {
  input: FindPcsByIds;
};

export type QueryPositionDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryProcessDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryProgramDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryRamStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryStorageStatusByPcIdArgs = {
  pcId: Scalars['Int']['input'];
};

export type QueryStorageStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTempStatusDetailArgs = {
  id: Scalars['Int']['input'];
};

export type RamStatus = {
  __typename?: 'RamStatus';
  /** RAM 평균 사용량 */
  average: Scalars['Float']['output'];
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
};

/** 정렬 순서: 오름차순(ASC), 내림차순(DESC) */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StorageStatus = {
  __typename?: 'StorageStatus';
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
  /** Storage 사용량 */
  usage: Scalars['Float']['output'];
};

export type TempStatus = {
  __typename?: 'TempStatus';
  /** 평균 온도 */
  average: Scalars['Float']['output'];
  /** 생성 일시 */
  createdAt: Scalars['String']['output'];
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
  updatedAt: Scalars['String']['output'];
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

export type GetCpuStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetCpuStatusListQuery = {
  __typename?: 'Query';
  cpuStatusList: Array<{
    __typename?: 'CpuStatus';
    id: number;
    pcId: number;
    name: string;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetCpuStatusQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetCpuStatusQuery = {
  __typename?: 'Query';
  cpuStatusDetail: {
    __typename?: 'CpuStatus';
    id: number;
    pcId: number;
    name: string;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetDriverListQueryVariables = Exact<{ [key: string]: never }>;

export type GetDriverListQuery = {
  __typename?: 'Query';
  driverList: Array<{
    __typename?: 'Driver';
    id: number;
    image: string;
    name: string;
    version: string;
    driverUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetDriverDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetDriverDetailQuery = {
  __typename?: 'Query';
  driverDetail: {
    __typename?: 'Driver';
    id: number;
    image: string;
    name: string;
    version: string;
    driverUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetGpuStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetGpuStatusListQuery = {
  __typename?: 'Query';
  gpuStatusList: Array<{
    __typename?: 'GpuStatus';
    id: number;
    pcId: number;
    name: string;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetGpuStatusDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetGpuStatusDetailQuery = {
  __typename?: 'Query';
  gpuStatusDetail: {
    __typename?: 'GpuStatus';
    id: number;
    pcId: number;
    name: string;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetPcsQueryVariables = Exact<{
  input?: InputMaybe<FindPcsInput>;
}>;

export type GetPcsQuery = {
  __typename?: 'Query';
  pcList: {
    __typename?: 'PcPagination';
    totalCount: number;
    totalPages?: number | null;
    hasNextPage: boolean;
    items: Array<{
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
      launcherUpdatedAt: string;
      createdAt: string;
      updatedAt: string;
      line: {
        __typename?: 'Line';
        id: number;
        code: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
      position: {
        __typename?: 'Position';
        id: number;
        code: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
      process: {
        __typename?: 'Process';
        id: number;
        code: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
      cpuStatus: {
        __typename?: 'CpuStatus';
        id: number;
        pcId: number;
        name: string;
        usage: number;
        unit: string;
        createdAt: string;
        updatedAt: string;
      };
      gpuStatus: {
        __typename?: 'GpuStatus';
        id: number;
        pcId: number;
        name: string;
        usage: number;
        unit: string;
        createdAt: string;
        updatedAt: string;
      };
      networkStatus: {
        __typename?: 'NetworkStatus';
        id: number;
        pcId: number;
        send: number;
        receive: number;
        createdAt: string;
        updatedAt: string;
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
        createdAt: string;
        updatedAt: string;
      };
      storageStatuses: Array<{
        __typename?: 'StorageStatus';
        id: number;
        pcId: number;
        name: string;
        total: number;
        usage: number;
        unit: string;
        createdAt: string;
        updatedAt: string;
      }>;
      tempStatus: {
        __typename?: 'TempStatus';
        id: number;
        pcId: number;
        current: number;
        average: number;
        lowest: number;
        highest: number;
        unit: string;
        createdAt: string;
        updatedAt: string;
      };
      pcDrivers: Array<{
        __typename?: 'PcDriver';
        id: number;
        pcId: number;
        driverId: number;
        createdAt: string;
        updatedAt: string;
        driver: {
          __typename?: 'Driver';
          id: number;
          image: string;
          name: string;
          version: string;
          driverUpdatedAt: string;
          createdAt: string;
          updatedAt: string;
        };
      }>;
      pcPrograms: Array<{
        __typename?: 'PcProgram';
        id: number;
        pcId: number;
        programId: number;
        createdAt: string;
        updatedAt: string;
        program: {
          __typename?: 'Program';
          id: number;
          image: string;
          name: string;
          version: string;
          programUpdatedAt: string;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    }>;
  };
};

export type GetPcQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPcQuery = {
  __typename?: 'Query';
  pcDetail: {
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
    launcherUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
    line: {
      __typename?: 'Line';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    position: {
      __typename?: 'Position';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    process: {
      __typename?: 'Process';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    cpuStatus: {
      __typename?: 'CpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    gpuStatus: {
      __typename?: 'GpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    networkStatus: {
      __typename?: 'NetworkStatus';
      id: number;
      pcId: number;
      send: number;
      receive: number;
      createdAt: string;
      updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    };
    storageStatuses: Array<{
      __typename?: 'StorageStatus';
      id: number;
      pcId: number;
      name: string;
      total: number;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    }>;
    tempStatus: {
      __typename?: 'TempStatus';
      id: number;
      pcId: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      id: number;
      pcId: number;
      driverId: number;
      createdAt: string;
      updatedAt: string;
      driver: {
        __typename?: 'Driver';
        id: number;
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: string;
        createdAt: string;
        updatedAt: string;
      };
    }>;
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      id: number;
      pcId: number;
      programId: number;
      createdAt: string;
      updatedAt: string;
      program: {
        __typename?: 'Program';
        id: number;
        image: string;
        name: string;
        version: string;
        programUpdatedAt: string;
        createdAt: string;
        updatedAt: string;
      };
    }>;
  };
};

export type GetPcsByIdsQueryVariables = Exact<{
  input: FindPcsByIds;
}>;

export type GetPcsByIdsQuery = {
  __typename?: 'Query';
  pcsByIds: Array<{
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
    launcherUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
    line: {
      __typename?: 'Line';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    position: {
      __typename?: 'Position';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    process: {
      __typename?: 'Process';
      id: number;
      code: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    cpuStatus: {
      __typename?: 'CpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    gpuStatus: {
      __typename?: 'GpuStatus';
      id: number;
      pcId: number;
      name: string;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    networkStatus: {
      __typename?: 'NetworkStatus';
      id: number;
      pcId: number;
      send: number;
      receive: number;
      createdAt: string;
      updatedAt: string;
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
      createdAt: string;
      updatedAt: string;
    };
    storageStatuses: Array<{
      __typename?: 'StorageStatus';
      id: number;
      pcId: number;
      name: string;
      total: number;
      usage: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    }>;
    tempStatus: {
      __typename?: 'TempStatus';
      id: number;
      pcId: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
      createdAt: string;
      updatedAt: string;
    };
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      id: number;
      pcId: number;
      driverId: number;
      createdAt: string;
      updatedAt: string;
      driver: {
        __typename?: 'Driver';
        id: number;
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: string;
        createdAt: string;
        updatedAt: string;
      };
    }>;
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      id: number;
      pcId: number;
      programId: number;
      createdAt: string;
      updatedAt: string;
      program: {
        __typename?: 'Program';
        id: number;
        image: string;
        name: string;
        version: string;
        programUpdatedAt: string;
        createdAt: string;
        updatedAt: string;
      };
    }>;
  }>;
};

export type GetLineListQueryVariables = Exact<{ [key: string]: never }>;

export type GetLineListQuery = {
  __typename?: 'Query';
  lineList: Array<{
    __typename?: 'Line';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetLineDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetLineDetailQuery = {
  __typename?: 'Query';
  lineDetail: {
    __typename?: 'Line';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetNetworkStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetNetworkStatusListQuery = {
  __typename?: 'Query';
  networkStatusList: Array<{
    __typename?: 'NetworkStatus';
    id: number;
    pcId: number;
    send: number;
    receive: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetNetworkStatusDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetNetworkStatusDetailQuery = {
  __typename?: 'Query';
  networkStatusDetail: {
    __typename?: 'NetworkStatus';
    id: number;
    pcId: number;
    send: number;
    receive: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetPcListQueryVariables = Exact<{
  input?: InputMaybe<FindPcsInput>;
}>;

export type GetPcListQuery = {
  __typename?: 'Query';
  pcList: {
    __typename?: 'PcPagination';
    totalPages?: number | null;
    items: Array<{
      __typename?: 'Pc';
      id: number;
      serialNumber: string;
      brain: BrainEnum;
      isLicense: boolean;
      isProgram: boolean;
      isNetwork: boolean;
      anydeskIp: string;
      launcherUpdatedAt: string;
      line: { __typename?: 'Line'; id: number; name: string };
      position: { __typename?: 'Position'; id: number; name: string };
      process: { __typename?: 'Process'; id: number; name: string };
      pcPrograms: Array<{
        __typename?: 'PcProgram';
        program: { __typename?: 'Program'; image: string; name: string; version: string };
      }>;
    }>;
  };
};

export type GetPcDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPcDetailQuery = {
  __typename?: 'Query';
  pcDetail: {
    __typename?: 'Pc';
    id: number;
    serialNumber: string;
    brain: BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    anydeskIp: string;
    ipv4: string;
    activeServer: string;
    launcherUpdatedAt: string;
    line: { __typename?: 'Line'; id: number; code: string; name: string };
    position: { __typename?: 'Position'; id: number; code: string; name: string };
    process: { __typename?: 'Process'; id: number; code: string; name: string };
    cpuStatus: { __typename?: 'CpuStatus'; name: string; usage: number; unit: string };
    gpuStatus: { __typename?: 'GpuStatus'; name: string; usage: number; unit: string };
    networkStatus: { __typename?: 'NetworkStatus'; send: number; receive: number; unit: string };
    ramStatus: {
      __typename?: 'RamStatus';
      total: number;
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
    };
    storageStatuses: Array<{
      __typename?: 'StorageStatus';
      name: string;
      total: number;
      usage: number;
      unit: string;
    }>;
    tempStatus: {
      __typename?: 'TempStatus';
      current: number;
      average: number;
      lowest: number;
      highest: number;
      unit: string;
    };
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      driver: {
        __typename?: 'Driver';
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: string;
      };
    }>;
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      program: {
        __typename?: 'Program';
        image: string;
        name: string;
        version: string;
        programUpdatedAt: string;
      };
    }>;
  };
};

export type GetPcListByIdsQueryVariables = Exact<{
  input: FindPcsByIds;
}>;

export type GetPcListByIdsQuery = {
  __typename?: 'Query';
  pcsByIds: Array<{
    __typename?: 'Pc';
    id: number;
    serialNumber: string;
    brain: BrainEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    anydeskIp: string;
    launcherUpdatedAt: string;
    line: { __typename?: 'Line'; id: number; name: string };
    position: { __typename?: 'Position'; id: number; name: string };
    process: { __typename?: 'Process'; id: number; name: string };
    pcPrograms: Array<{
      __typename?: 'PcProgram';
      program: {
        __typename?: 'Program';
        image: string;
        name: string;
        version: string;
        programUpdatedAt: string;
      };
    }>;
    pcDrivers: Array<{
      __typename?: 'PcDriver';
      driver: {
        __typename?: 'Driver';
        image: string;
        name: string;
        version: string;
        driverUpdatedAt: string;
      };
    }>;
  }>;
};

export type GetPcDriverListQueryVariables = Exact<{ [key: string]: never }>;

export type GetPcDriverListQuery = {
  __typename?: 'Query';
  pcDriverList: Array<{
    __typename?: 'PcDriver';
    id: number;
    pcId: number;
    driverId: number;
    createdAt: string;
    updatedAt: string;
    driver: {
      __typename?: 'Driver';
      id: number;
      image: string;
      name: string;
      version: string;
      driverUpdatedAt: string;
      createdAt: string;
      updatedAt: string;
    };
  }>;
};

export type GetPcDriverDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPcDriverDetailQuery = {
  __typename?: 'Query';
  pcDriverDetail: {
    __typename?: 'PcDriver';
    id: number;
    pcId: number;
    driverId: number;
    createdAt: string;
    updatedAt: string;
    driver: {
      __typename?: 'Driver';
      id: number;
      image: string;
      name: string;
      version: string;
      driverUpdatedAt: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type GetPcProgramListQueryVariables = Exact<{ [key: string]: never }>;

export type GetPcProgramListQuery = {
  __typename?: 'Query';
  pcProgramList: Array<{
    __typename?: 'PcProgram';
    id: number;
    pcId: number;
    programId: number;
    createdAt: string;
    updatedAt: string;
    program: {
      __typename?: 'Program';
      id: number;
      image: string;
      name: string;
      version: string;
      programUpdatedAt: string;
      createdAt: string;
      updatedAt: string;
    };
  }>;
};

export type GetPcProgramDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPcProgramDetailQuery = {
  __typename?: 'Query';
  pcProgramDetail: {
    __typename?: 'PcProgram';
    id: number;
    pcId: number;
    programId: number;
    createdAt: string;
    updatedAt: string;
    program: {
      __typename?: 'Program';
      id: number;
      image: string;
      name: string;
      version: string;
      programUpdatedAt: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type GetPositionListQueryVariables = Exact<{ [key: string]: never }>;

export type GetPositionListQuery = {
  __typename?: 'Query';
  positionList: Array<{
    __typename?: 'Position';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetPositionDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPositionDetailQuery = {
  __typename?: 'Query';
  positionDetail: {
    __typename?: 'Position';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetProcessListQueryVariables = Exact<{ [key: string]: never }>;

export type GetProcessListQuery = {
  __typename?: 'Query';
  processList: Array<{
    __typename?: 'Process';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetProcessDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetProcessDetailQuery = {
  __typename?: 'Query';
  processDetail: {
    __typename?: 'Process';
    id: number;
    code: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetProgramListQueryVariables = Exact<{ [key: string]: never }>;

export type GetProgramListQuery = {
  __typename?: 'Query';
  programList: Array<{
    __typename?: 'Program';
    id: number;
    image: string;
    name: string;
    version: string;
    programUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetProgramDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetProgramDetailQuery = {
  __typename?: 'Query';
  programDetail: {
    __typename?: 'Program';
    id: number;
    image: string;
    name: string;
    version: string;
    programUpdatedAt: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetRamStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetRamStatusListQuery = {
  __typename?: 'Query';
  ramStatusList: Array<{
    __typename?: 'RamStatus';
    id: number;
    pcId: number;
    total: number;
    current: number;
    average: number;
    lowest: number;
    highest: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetRamStatusDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetRamStatusDetailQuery = {
  __typename?: 'Query';
  ramStatusDetail: {
    __typename?: 'RamStatus';
    id: number;
    pcId: number;
    total: number;
    current: number;
    average: number;
    lowest: number;
    highest: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetStorageStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetStorageStatusListQuery = {
  __typename?: 'Query';
  storageStatusList: Array<{
    __typename?: 'StorageStatus';
    id: number;
    pcId: number;
    name: string;
    total: number;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetStorageDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetStorageDetailQuery = {
  __typename?: 'Query';
  storageStatusDetail: {
    __typename?: 'StorageStatus';
    id: number;
    pcId: number;
    name: string;
    total: number;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetStorageStatusByPcIdQueryVariables = Exact<{
  pcId: Scalars['Int']['input'];
}>;

export type GetStorageStatusByPcIdQuery = {
  __typename?: 'Query';
  storageStatusByPcId?: Array<{
    __typename?: 'StorageStatus';
    id: number;
    pcId: number;
    name: string;
    total: number;
    usage: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }> | null;
};

export type GetTempStatusListQueryVariables = Exact<{ [key: string]: never }>;

export type GetTempStatusListQuery = {
  __typename?: 'Query';
  tempStatusList: Array<{
    __typename?: 'TempStatus';
    id: number;
    pcId: number;
    current: number;
    average: number;
    lowest: number;
    highest: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetTempStatusDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetTempStatusDetailQuery = {
  __typename?: 'Query';
  tempStatusDetail: {
    __typename?: 'TempStatus';
    id: number;
    pcId: number;
    current: number;
    average: number;
    lowest: number;
    highest: number;
    unit: string;
    createdAt: string;
    updatedAt: string;
  };
};

export const GetCpuStatusListDocument = gql`
  query GetCpuStatusList {
    cpuStatusList {
      id
      pcId
      name
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetCpuStatusListQuery__
 *
 * To run a query within a React component, call `useGetCpuStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCpuStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCpuStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCpuStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>(
    GetCpuStatusListDocument,
    options,
  );
}
export function useGetCpuStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>(
    GetCpuStatusListDocument,
    options,
  );
}
export function useGetCpuStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCpuStatusListQuery, GetCpuStatusListQueryVariables>(
    GetCpuStatusListDocument,
    options,
  );
}
export type GetCpuStatusListQueryHookResult = ReturnType<typeof useGetCpuStatusListQuery>;
export type GetCpuStatusListLazyQueryHookResult = ReturnType<typeof useGetCpuStatusListLazyQuery>;
export type GetCpuStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetCpuStatusListSuspenseQuery
>;
export type GetCpuStatusListQueryResult = Apollo.QueryResult<
  GetCpuStatusListQuery,
  GetCpuStatusListQueryVariables
>;
export const GetCpuStatusDocument = gql`
  query GetCpuStatus($id: Int!) {
    cpuStatusDetail(id: $id) {
      id
      pcId
      name
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetCpuStatusQuery__
 *
 * To run a query within a React component, call `useGetCpuStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCpuStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCpuStatusQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCpuStatusQuery(
  baseOptions: Apollo.QueryHookOptions<GetCpuStatusQuery, GetCpuStatusQueryVariables> &
    ({ variables: GetCpuStatusQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCpuStatusQuery, GetCpuStatusQueryVariables>(
    GetCpuStatusDocument,
    options,
  );
}
export function useGetCpuStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCpuStatusQuery, GetCpuStatusQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCpuStatusQuery, GetCpuStatusQueryVariables>(
    GetCpuStatusDocument,
    options,
  );
}
export function useGetCpuStatusSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetCpuStatusQuery, GetCpuStatusQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCpuStatusQuery, GetCpuStatusQueryVariables>(
    GetCpuStatusDocument,
    options,
  );
}
export type GetCpuStatusQueryHookResult = ReturnType<typeof useGetCpuStatusQuery>;
export type GetCpuStatusLazyQueryHookResult = ReturnType<typeof useGetCpuStatusLazyQuery>;
export type GetCpuStatusSuspenseQueryHookResult = ReturnType<typeof useGetCpuStatusSuspenseQuery>;
export type GetCpuStatusQueryResult = Apollo.QueryResult<
  GetCpuStatusQuery,
  GetCpuStatusQueryVariables
>;
export const GetDriverListDocument = gql`
  query GetDriverList {
    driverList {
      id
      image
      name
      version
      driverUpdatedAt
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetDriverListQuery__
 *
 * To run a query within a React component, call `useGetDriverListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriverListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriverListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDriverListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDriverListQuery, GetDriverListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDriverListQuery, GetDriverListQueryVariables>(
    GetDriverListDocument,
    options,
  );
}
export function useGetDriverListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDriverListQuery, GetDriverListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDriverListQuery, GetDriverListQueryVariables>(
    GetDriverListDocument,
    options,
  );
}
export function useGetDriverListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetDriverListQuery, GetDriverListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDriverListQuery, GetDriverListQueryVariables>(
    GetDriverListDocument,
    options,
  );
}
export type GetDriverListQueryHookResult = ReturnType<typeof useGetDriverListQuery>;
export type GetDriverListLazyQueryHookResult = ReturnType<typeof useGetDriverListLazyQuery>;
export type GetDriverListSuspenseQueryHookResult = ReturnType<typeof useGetDriverListSuspenseQuery>;
export type GetDriverListQueryResult = Apollo.QueryResult<
  GetDriverListQuery,
  GetDriverListQueryVariables
>;
export const GetDriverDetailDocument = gql`
  query GetDriverDetail($id: Int!) {
    driverDetail(id: $id) {
      id
      image
      name
      version
      driverUpdatedAt
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetDriverDetailQuery__
 *
 * To run a query within a React component, call `useGetDriverDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriverDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriverDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDriverDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetDriverDetailQuery, GetDriverDetailQueryVariables> &
    ({ variables: GetDriverDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDriverDetailQuery, GetDriverDetailQueryVariables>(
    GetDriverDetailDocument,
    options,
  );
}
export function useGetDriverDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDriverDetailQuery, GetDriverDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDriverDetailQuery, GetDriverDetailQueryVariables>(
    GetDriverDetailDocument,
    options,
  );
}
export function useGetDriverDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetDriverDetailQuery, GetDriverDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDriverDetailQuery, GetDriverDetailQueryVariables>(
    GetDriverDetailDocument,
    options,
  );
}
export type GetDriverDetailQueryHookResult = ReturnType<typeof useGetDriverDetailQuery>;
export type GetDriverDetailLazyQueryHookResult = ReturnType<typeof useGetDriverDetailLazyQuery>;
export type GetDriverDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetDriverDetailSuspenseQuery
>;
export type GetDriverDetailQueryResult = Apollo.QueryResult<
  GetDriverDetailQuery,
  GetDriverDetailQueryVariables
>;
export const GetGpuStatusListDocument = gql`
  query GetGpuStatusList {
    gpuStatusList {
      id
      pcId
      name
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetGpuStatusListQuery__
 *
 * To run a query within a React component, call `useGetGpuStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGpuStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGpuStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGpuStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>(
    GetGpuStatusListDocument,
    options,
  );
}
export function useGetGpuStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>(
    GetGpuStatusListDocument,
    options,
  );
}
export function useGetGpuStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetGpuStatusListQuery, GetGpuStatusListQueryVariables>(
    GetGpuStatusListDocument,
    options,
  );
}
export type GetGpuStatusListQueryHookResult = ReturnType<typeof useGetGpuStatusListQuery>;
export type GetGpuStatusListLazyQueryHookResult = ReturnType<typeof useGetGpuStatusListLazyQuery>;
export type GetGpuStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetGpuStatusListSuspenseQuery
>;
export type GetGpuStatusListQueryResult = Apollo.QueryResult<
  GetGpuStatusListQuery,
  GetGpuStatusListQueryVariables
>;
export const GetGpuStatusDetailDocument = gql`
  query GetGpuStatusDetail($id: Int!) {
    gpuStatusDetail(id: $id) {
      id
      pcId
      name
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetGpuStatusDetailQuery__
 *
 * To run a query within a React component, call `useGetGpuStatusDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGpuStatusDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGpuStatusDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGpuStatusDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetGpuStatusDetailQuery, GetGpuStatusDetailQueryVariables> &
    ({ variables: GetGpuStatusDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGpuStatusDetailQuery, GetGpuStatusDetailQueryVariables>(
    GetGpuStatusDetailDocument,
    options,
  );
}
export function useGetGpuStatusDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGpuStatusDetailQuery,
    GetGpuStatusDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGpuStatusDetailQuery, GetGpuStatusDetailQueryVariables>(
    GetGpuStatusDetailDocument,
    options,
  );
}
export function useGetGpuStatusDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetGpuStatusDetailQuery, GetGpuStatusDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetGpuStatusDetailQuery, GetGpuStatusDetailQueryVariables>(
    GetGpuStatusDetailDocument,
    options,
  );
}
export type GetGpuStatusDetailQueryHookResult = ReturnType<typeof useGetGpuStatusDetailQuery>;
export type GetGpuStatusDetailLazyQueryHookResult = ReturnType<
  typeof useGetGpuStatusDetailLazyQuery
>;
export type GetGpuStatusDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetGpuStatusDetailSuspenseQuery
>;
export type GetGpuStatusDetailQueryResult = Apollo.QueryResult<
  GetGpuStatusDetailQuery,
  GetGpuStatusDetailQueryVariables
>;
export const GetPcsDocument = gql`
  query GetPcs($input: FindPcsInput) {
    pcList(input: $input) {
      items {
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
        storageStatuses {
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
      totalCount
      totalPages
      hasNextPage
    }
  }
`;

/**
 * __useGetPcsQuery__
 *
 * To run a query within a React component, call `useGetPcsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPcsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcsQuery, GetPcsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcsQuery, GetPcsQueryVariables>(GetPcsDocument, options);
}
export function useGetPcsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcsQuery, GetPcsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcsQuery, GetPcsQueryVariables>(GetPcsDocument, options);
}
export function useGetPcsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcsQuery, GetPcsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcsQuery, GetPcsQueryVariables>(GetPcsDocument, options);
}
export type GetPcsQueryHookResult = ReturnType<typeof useGetPcsQuery>;
export type GetPcsLazyQueryHookResult = ReturnType<typeof useGetPcsLazyQuery>;
export type GetPcsSuspenseQueryHookResult = ReturnType<typeof useGetPcsSuspenseQuery>;
export type GetPcsQueryResult = Apollo.QueryResult<GetPcsQuery, GetPcsQueryVariables>;
export const GetPcDocument = gql`
  query GetPc($id: Int!) {
    pcDetail(id: $id) {
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
      storageStatuses {
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
 * __useGetPcQuery__
 *
 * To run a query within a React component, call `useGetPcQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPcQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcQuery, GetPcQueryVariables> &
    ({ variables: GetPcQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcQuery, GetPcQueryVariables>(GetPcDocument, options);
}
export function useGetPcLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcQuery, GetPcQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcQuery, GetPcQueryVariables>(GetPcDocument, options);
}
export function useGetPcSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPcQuery, GetPcQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcQuery, GetPcQueryVariables>(GetPcDocument, options);
}
export type GetPcQueryHookResult = ReturnType<typeof useGetPcQuery>;
export type GetPcLazyQueryHookResult = ReturnType<typeof useGetPcLazyQuery>;
export type GetPcSuspenseQueryHookResult = ReturnType<typeof useGetPcSuspenseQuery>;
export type GetPcQueryResult = Apollo.QueryResult<GetPcQuery, GetPcQueryVariables>;
export const GetPcsByIdsDocument = gql`
  query GetPcsByIds($input: FindPcsByIds!) {
    pcsByIds(input: $input) {
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
      storageStatuses {
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
 * __useGetPcsByIdsQuery__
 *
 * To run a query within a React component, call `useGetPcsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcsByIdsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPcsByIdsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcsByIdsQuery, GetPcsByIdsQueryVariables> &
    ({ variables: GetPcsByIdsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcsByIdsQuery, GetPcsByIdsQueryVariables>(GetPcsByIdsDocument, options);
}
export function useGetPcsByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcsByIdsQuery, GetPcsByIdsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcsByIdsQuery, GetPcsByIdsQueryVariables>(
    GetPcsByIdsDocument,
    options,
  );
}
export function useGetPcsByIdsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcsByIdsQuery, GetPcsByIdsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcsByIdsQuery, GetPcsByIdsQueryVariables>(
    GetPcsByIdsDocument,
    options,
  );
}
export type GetPcsByIdsQueryHookResult = ReturnType<typeof useGetPcsByIdsQuery>;
export type GetPcsByIdsLazyQueryHookResult = ReturnType<typeof useGetPcsByIdsLazyQuery>;
export type GetPcsByIdsSuspenseQueryHookResult = ReturnType<typeof useGetPcsByIdsSuspenseQuery>;
export type GetPcsByIdsQueryResult = Apollo.QueryResult<
  GetPcsByIdsQuery,
  GetPcsByIdsQueryVariables
>;
export const GetLineListDocument = gql`
  query GetLineList {
    lineList {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetLineListQuery__
 *
 * To run a query within a React component, call `useGetLineListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLineListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLineListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLineListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetLineListQuery, GetLineListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLineListQuery, GetLineListQueryVariables>(GetLineListDocument, options);
}
export function useGetLineListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetLineListQuery, GetLineListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLineListQuery, GetLineListQueryVariables>(
    GetLineListDocument,
    options,
  );
}
export function useGetLineListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetLineListQuery, GetLineListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLineListQuery, GetLineListQueryVariables>(
    GetLineListDocument,
    options,
  );
}
export type GetLineListQueryHookResult = ReturnType<typeof useGetLineListQuery>;
export type GetLineListLazyQueryHookResult = ReturnType<typeof useGetLineListLazyQuery>;
export type GetLineListSuspenseQueryHookResult = ReturnType<typeof useGetLineListSuspenseQuery>;
export type GetLineListQueryResult = Apollo.QueryResult<
  GetLineListQuery,
  GetLineListQueryVariables
>;
export const GetLineDetailDocument = gql`
  query GetLineDetail($id: Int!) {
    lineDetail(id: $id) {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetLineDetailQuery__
 *
 * To run a query within a React component, call `useGetLineDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLineDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLineDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLineDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetLineDetailQuery, GetLineDetailQueryVariables> &
    ({ variables: GetLineDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLineDetailQuery, GetLineDetailQueryVariables>(
    GetLineDetailDocument,
    options,
  );
}
export function useGetLineDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetLineDetailQuery, GetLineDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLineDetailQuery, GetLineDetailQueryVariables>(
    GetLineDetailDocument,
    options,
  );
}
export function useGetLineDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetLineDetailQuery, GetLineDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLineDetailQuery, GetLineDetailQueryVariables>(
    GetLineDetailDocument,
    options,
  );
}
export type GetLineDetailQueryHookResult = ReturnType<typeof useGetLineDetailQuery>;
export type GetLineDetailLazyQueryHookResult = ReturnType<typeof useGetLineDetailLazyQuery>;
export type GetLineDetailSuspenseQueryHookResult = ReturnType<typeof useGetLineDetailSuspenseQuery>;
export type GetLineDetailQueryResult = Apollo.QueryResult<
  GetLineDetailQuery,
  GetLineDetailQueryVariables
>;
export const GetNetworkStatusListDocument = gql`
  query GetNetworkStatusList {
    networkStatusList {
      id
      pcId
      send
      receive
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetNetworkStatusListQuery__
 *
 * To run a query within a React component, call `useGetNetworkStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNetworkStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNetworkStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNetworkStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNetworkStatusListQuery,
    GetNetworkStatusListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNetworkStatusListQuery, GetNetworkStatusListQueryVariables>(
    GetNetworkStatusListDocument,
    options,
  );
}
export function useGetNetworkStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNetworkStatusListQuery,
    GetNetworkStatusListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNetworkStatusListQuery, GetNetworkStatusListQueryVariables>(
    GetNetworkStatusListDocument,
    options,
  );
}
export function useGetNetworkStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetNetworkStatusListQuery,
        GetNetworkStatusListQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetNetworkStatusListQuery, GetNetworkStatusListQueryVariables>(
    GetNetworkStatusListDocument,
    options,
  );
}
export type GetNetworkStatusListQueryHookResult = ReturnType<typeof useGetNetworkStatusListQuery>;
export type GetNetworkStatusListLazyQueryHookResult = ReturnType<
  typeof useGetNetworkStatusListLazyQuery
>;
export type GetNetworkStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetNetworkStatusListSuspenseQuery
>;
export type GetNetworkStatusListQueryResult = Apollo.QueryResult<
  GetNetworkStatusListQuery,
  GetNetworkStatusListQueryVariables
>;
export const GetNetworkStatusDetailDocument = gql`
  query GetNetworkStatusDetail($id: Int!) {
    networkStatusDetail(id: $id) {
      id
      pcId
      send
      receive
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetNetworkStatusDetailQuery__
 *
 * To run a query within a React component, call `useGetNetworkStatusDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNetworkStatusDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNetworkStatusDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNetworkStatusDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNetworkStatusDetailQuery,
    GetNetworkStatusDetailQueryVariables
  > &
    ({ variables: GetNetworkStatusDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNetworkStatusDetailQuery, GetNetworkStatusDetailQueryVariables>(
    GetNetworkStatusDetailDocument,
    options,
  );
}
export function useGetNetworkStatusDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNetworkStatusDetailQuery,
    GetNetworkStatusDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNetworkStatusDetailQuery, GetNetworkStatusDetailQueryVariables>(
    GetNetworkStatusDetailDocument,
    options,
  );
}
export function useGetNetworkStatusDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetNetworkStatusDetailQuery,
        GetNetworkStatusDetailQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetNetworkStatusDetailQuery, GetNetworkStatusDetailQueryVariables>(
    GetNetworkStatusDetailDocument,
    options,
  );
}
export type GetNetworkStatusDetailQueryHookResult = ReturnType<
  typeof useGetNetworkStatusDetailQuery
>;
export type GetNetworkStatusDetailLazyQueryHookResult = ReturnType<
  typeof useGetNetworkStatusDetailLazyQuery
>;
export type GetNetworkStatusDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetNetworkStatusDetailSuspenseQuery
>;
export type GetNetworkStatusDetailQueryResult = Apollo.QueryResult<
  GetNetworkStatusDetailQuery,
  GetNetworkStatusDetailQueryVariables
>;
export const GetPcListDocument = gql`
  query GetPcList($input: FindPcsInput) {
    pcList(input: $input) {
      items {
        id
        serialNumber
        line {
          id
          name
        }
        position {
          id
          name
        }
        process {
          id
          name
        }
        brain
        isLicense
        isProgram
        isNetwork
        anydeskIp
        launcherUpdatedAt
        pcPrograms {
          program {
            image
            name
            version
          }
        }
      }
      totalPages
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
 *      input: // value for 'input'
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
export const GetPcDetailDocument = gql`
  query GetPcDetail($id: Int!) {
    pcDetail(id: $id) {
      id
      serialNumber
      brain
      isLicense
      isNetwork
      isProgram
      anydeskIp
      ipv4
      activeServer
      launcherUpdatedAt
      line {
        id
        code
        name
      }
      position {
        id
        code
        name
      }
      process {
        id
        code
        name
      }
      cpuStatus {
        name
        usage
        unit
      }
      gpuStatus {
        name
        usage
        unit
      }
      networkStatus {
        send
        receive
        unit
      }
      ramStatus {
        total
        current
        average
        lowest
        highest
        unit
      }
      storageStatuses {
        name
        total
        usage
        unit
      }
      tempStatus {
        current
        average
        lowest
        highest
        unit
      }
      pcDrivers {
        driver {
          image
          name
          version
          driverUpdatedAt
        }
      }
      pcPrograms {
        program {
          image
          name
          version
          programUpdatedAt
        }
      }
    }
  }
`;

/**
 * __useGetPcDetailQuery__
 *
 * To run a query within a React component, call `useGetPcDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPcDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcDetailQuery, GetPcDetailQueryVariables> &
    ({ variables: GetPcDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcDetailQuery, GetPcDetailQueryVariables>(GetPcDetailDocument, options);
}
export function useGetPcDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcDetailQuery, GetPcDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcDetailQuery, GetPcDetailQueryVariables>(
    GetPcDetailDocument,
    options,
  );
}
export function useGetPcDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcDetailQuery, GetPcDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcDetailQuery, GetPcDetailQueryVariables>(
    GetPcDetailDocument,
    options,
  );
}
export type GetPcDetailQueryHookResult = ReturnType<typeof useGetPcDetailQuery>;
export type GetPcDetailLazyQueryHookResult = ReturnType<typeof useGetPcDetailLazyQuery>;
export type GetPcDetailSuspenseQueryHookResult = ReturnType<typeof useGetPcDetailSuspenseQuery>;
export type GetPcDetailQueryResult = Apollo.QueryResult<
  GetPcDetailQuery,
  GetPcDetailQueryVariables
>;
export const GetPcListByIdsDocument = gql`
  query GetPcListByIds($input: FindPcsByIds!) {
    pcsByIds(input: $input) {
      id
      serialNumber
      line {
        id
        name
      }
      position {
        id
        name
      }
      process {
        id
        name
      }
      brain
      isLicense
      isNetwork
      isProgram
      anydeskIp
      launcherUpdatedAt
      pcPrograms {
        program {
          image
          name
          version
          programUpdatedAt
        }
      }
      pcDrivers {
        driver {
          image
          name
          version
          driverUpdatedAt
        }
      }
    }
  }
`;

/**
 * __useGetPcListByIdsQuery__
 *
 * To run a query within a React component, call `useGetPcListByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcListByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcListByIdsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPcListByIdsQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcListByIdsQuery, GetPcListByIdsQueryVariables> &
    ({ variables: GetPcListByIdsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcListByIdsQuery, GetPcListByIdsQueryVariables>(
    GetPcListByIdsDocument,
    options,
  );
}
export function useGetPcListByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcListByIdsQuery, GetPcListByIdsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcListByIdsQuery, GetPcListByIdsQueryVariables>(
    GetPcListByIdsDocument,
    options,
  );
}
export function useGetPcListByIdsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcListByIdsQuery, GetPcListByIdsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcListByIdsQuery, GetPcListByIdsQueryVariables>(
    GetPcListByIdsDocument,
    options,
  );
}
export type GetPcListByIdsQueryHookResult = ReturnType<typeof useGetPcListByIdsQuery>;
export type GetPcListByIdsLazyQueryHookResult = ReturnType<typeof useGetPcListByIdsLazyQuery>;
export type GetPcListByIdsSuspenseQueryHookResult = ReturnType<
  typeof useGetPcListByIdsSuspenseQuery
>;
export type GetPcListByIdsQueryResult = Apollo.QueryResult<
  GetPcListByIdsQuery,
  GetPcListByIdsQueryVariables
>;
export const GetPcDriverListDocument = gql`
  query GetPcDriverList {
    pcDriverList {
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
  }
`;

/**
 * __useGetPcDriverListQuery__
 *
 * To run a query within a React component, call `useGetPcDriverListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcDriverListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcDriverListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPcDriverListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcDriverListQuery, GetPcDriverListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcDriverListQuery, GetPcDriverListQueryVariables>(
    GetPcDriverListDocument,
    options,
  );
}
export function useGetPcDriverListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcDriverListQuery, GetPcDriverListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcDriverListQuery, GetPcDriverListQueryVariables>(
    GetPcDriverListDocument,
    options,
  );
}
export function useGetPcDriverListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcDriverListQuery, GetPcDriverListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcDriverListQuery, GetPcDriverListQueryVariables>(
    GetPcDriverListDocument,
    options,
  );
}
export type GetPcDriverListQueryHookResult = ReturnType<typeof useGetPcDriverListQuery>;
export type GetPcDriverListLazyQueryHookResult = ReturnType<typeof useGetPcDriverListLazyQuery>;
export type GetPcDriverListSuspenseQueryHookResult = ReturnType<
  typeof useGetPcDriverListSuspenseQuery
>;
export type GetPcDriverListQueryResult = Apollo.QueryResult<
  GetPcDriverListQuery,
  GetPcDriverListQueryVariables
>;
export const GetPcDriverDetailDocument = gql`
  query GetPcDriverDetail($id: Int!) {
    pcDriverDetail(id: $id) {
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
  }
`;

/**
 * __useGetPcDriverDetailQuery__
 *
 * To run a query within a React component, call `useGetPcDriverDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcDriverDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcDriverDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPcDriverDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcDriverDetailQuery, GetPcDriverDetailQueryVariables> &
    ({ variables: GetPcDriverDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcDriverDetailQuery, GetPcDriverDetailQueryVariables>(
    GetPcDriverDetailDocument,
    options,
  );
}
export function useGetPcDriverDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPcDriverDetailQuery,
    GetPcDriverDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcDriverDetailQuery, GetPcDriverDetailQueryVariables>(
    GetPcDriverDetailDocument,
    options,
  );
}
export function useGetPcDriverDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcDriverDetailQuery, GetPcDriverDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcDriverDetailQuery, GetPcDriverDetailQueryVariables>(
    GetPcDriverDetailDocument,
    options,
  );
}
export type GetPcDriverDetailQueryHookResult = ReturnType<typeof useGetPcDriverDetailQuery>;
export type GetPcDriverDetailLazyQueryHookResult = ReturnType<typeof useGetPcDriverDetailLazyQuery>;
export type GetPcDriverDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetPcDriverDetailSuspenseQuery
>;
export type GetPcDriverDetailQueryResult = Apollo.QueryResult<
  GetPcDriverDetailQuery,
  GetPcDriverDetailQueryVariables
>;
export const GetPcProgramListDocument = gql`
  query GetPcProgramList {
    pcProgramList {
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
`;

/**
 * __useGetPcProgramListQuery__
 *
 * To run a query within a React component, call `useGetPcProgramListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcProgramListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcProgramListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPcProgramListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPcProgramListQuery, GetPcProgramListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcProgramListQuery, GetPcProgramListQueryVariables>(
    GetPcProgramListDocument,
    options,
  );
}
export function useGetPcProgramListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPcProgramListQuery, GetPcProgramListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcProgramListQuery, GetPcProgramListQueryVariables>(
    GetPcProgramListDocument,
    options,
  );
}
export function useGetPcProgramListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcProgramListQuery, GetPcProgramListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcProgramListQuery, GetPcProgramListQueryVariables>(
    GetPcProgramListDocument,
    options,
  );
}
export type GetPcProgramListQueryHookResult = ReturnType<typeof useGetPcProgramListQuery>;
export type GetPcProgramListLazyQueryHookResult = ReturnType<typeof useGetPcProgramListLazyQuery>;
export type GetPcProgramListSuspenseQueryHookResult = ReturnType<
  typeof useGetPcProgramListSuspenseQuery
>;
export type GetPcProgramListQueryResult = Apollo.QueryResult<
  GetPcProgramListQuery,
  GetPcProgramListQueryVariables
>;
export const GetPcProgramDetailDocument = gql`
  query GetPcProgramDetail($id: Int!) {
    pcProgramDetail(id: $id) {
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
`;

/**
 * __useGetPcProgramDetailQuery__
 *
 * To run a query within a React component, call `useGetPcProgramDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPcProgramDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPcProgramDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPcProgramDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetPcProgramDetailQuery, GetPcProgramDetailQueryVariables> &
    ({ variables: GetPcProgramDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPcProgramDetailQuery, GetPcProgramDetailQueryVariables>(
    GetPcProgramDetailDocument,
    options,
  );
}
export function useGetPcProgramDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPcProgramDetailQuery,
    GetPcProgramDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPcProgramDetailQuery, GetPcProgramDetailQueryVariables>(
    GetPcProgramDetailDocument,
    options,
  );
}
export function useGetPcProgramDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPcProgramDetailQuery, GetPcProgramDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPcProgramDetailQuery, GetPcProgramDetailQueryVariables>(
    GetPcProgramDetailDocument,
    options,
  );
}
export type GetPcProgramDetailQueryHookResult = ReturnType<typeof useGetPcProgramDetailQuery>;
export type GetPcProgramDetailLazyQueryHookResult = ReturnType<
  typeof useGetPcProgramDetailLazyQuery
>;
export type GetPcProgramDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetPcProgramDetailSuspenseQuery
>;
export type GetPcProgramDetailQueryResult = Apollo.QueryResult<
  GetPcProgramDetailQuery,
  GetPcProgramDetailQueryVariables
>;
export const GetPositionListDocument = gql`
  query GetPositionList {
    positionList {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetPositionListQuery__
 *
 * To run a query within a React component, call `useGetPositionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPositionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPositionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPositionListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPositionListQuery, GetPositionListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPositionListQuery, GetPositionListQueryVariables>(
    GetPositionListDocument,
    options,
  );
}
export function useGetPositionListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPositionListQuery, GetPositionListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPositionListQuery, GetPositionListQueryVariables>(
    GetPositionListDocument,
    options,
  );
}
export function useGetPositionListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPositionListQuery, GetPositionListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPositionListQuery, GetPositionListQueryVariables>(
    GetPositionListDocument,
    options,
  );
}
export type GetPositionListQueryHookResult = ReturnType<typeof useGetPositionListQuery>;
export type GetPositionListLazyQueryHookResult = ReturnType<typeof useGetPositionListLazyQuery>;
export type GetPositionListSuspenseQueryHookResult = ReturnType<
  typeof useGetPositionListSuspenseQuery
>;
export type GetPositionListQueryResult = Apollo.QueryResult<
  GetPositionListQuery,
  GetPositionListQueryVariables
>;
export const GetPositionDetailDocument = gql`
  query GetPositionDetail($id: Int!) {
    positionDetail(id: $id) {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetPositionDetailQuery__
 *
 * To run a query within a React component, call `useGetPositionDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPositionDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPositionDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPositionDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetPositionDetailQuery, GetPositionDetailQueryVariables> &
    ({ variables: GetPositionDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPositionDetailQuery, GetPositionDetailQueryVariables>(
    GetPositionDetailDocument,
    options,
  );
}
export function useGetPositionDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPositionDetailQuery,
    GetPositionDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPositionDetailQuery, GetPositionDetailQueryVariables>(
    GetPositionDetailDocument,
    options,
  );
}
export function useGetPositionDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPositionDetailQuery, GetPositionDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPositionDetailQuery, GetPositionDetailQueryVariables>(
    GetPositionDetailDocument,
    options,
  );
}
export type GetPositionDetailQueryHookResult = ReturnType<typeof useGetPositionDetailQuery>;
export type GetPositionDetailLazyQueryHookResult = ReturnType<typeof useGetPositionDetailLazyQuery>;
export type GetPositionDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetPositionDetailSuspenseQuery
>;
export type GetPositionDetailQueryResult = Apollo.QueryResult<
  GetPositionDetailQuery,
  GetPositionDetailQueryVariables
>;
export const GetProcessListDocument = gql`
  query GetProcessList {
    processList {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetProcessListQuery__
 *
 * To run a query within a React component, call `useGetProcessListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcessListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcessListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProcessListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProcessListQuery, GetProcessListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProcessListQuery, GetProcessListQueryVariables>(
    GetProcessListDocument,
    options,
  );
}
export function useGetProcessListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProcessListQuery, GetProcessListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProcessListQuery, GetProcessListQueryVariables>(
    GetProcessListDocument,
    options,
  );
}
export function useGetProcessListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetProcessListQuery, GetProcessListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetProcessListQuery, GetProcessListQueryVariables>(
    GetProcessListDocument,
    options,
  );
}
export type GetProcessListQueryHookResult = ReturnType<typeof useGetProcessListQuery>;
export type GetProcessListLazyQueryHookResult = ReturnType<typeof useGetProcessListLazyQuery>;
export type GetProcessListSuspenseQueryHookResult = ReturnType<
  typeof useGetProcessListSuspenseQuery
>;
export type GetProcessListQueryResult = Apollo.QueryResult<
  GetProcessListQuery,
  GetProcessListQueryVariables
>;
export const GetProcessDetailDocument = gql`
  query GetProcessDetail($id: Int!) {
    processDetail(id: $id) {
      id
      code
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetProcessDetailQuery__
 *
 * To run a query within a React component, call `useGetProcessDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProcessDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProcessDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProcessDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetProcessDetailQuery, GetProcessDetailQueryVariables> &
    ({ variables: GetProcessDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProcessDetailQuery, GetProcessDetailQueryVariables>(
    GetProcessDetailDocument,
    options,
  );
}
export function useGetProcessDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProcessDetailQuery, GetProcessDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProcessDetailQuery, GetProcessDetailQueryVariables>(
    GetProcessDetailDocument,
    options,
  );
}
export function useGetProcessDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetProcessDetailQuery, GetProcessDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetProcessDetailQuery, GetProcessDetailQueryVariables>(
    GetProcessDetailDocument,
    options,
  );
}
export type GetProcessDetailQueryHookResult = ReturnType<typeof useGetProcessDetailQuery>;
export type GetProcessDetailLazyQueryHookResult = ReturnType<typeof useGetProcessDetailLazyQuery>;
export type GetProcessDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetProcessDetailSuspenseQuery
>;
export type GetProcessDetailQueryResult = Apollo.QueryResult<
  GetProcessDetailQuery,
  GetProcessDetailQueryVariables
>;
export const GetProgramListDocument = gql`
  query GetProgramList {
    programList {
      id
      image
      name
      version
      programUpdatedAt
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetProgramListQuery__
 *
 * To run a query within a React component, call `useGetProgramListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProgramListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProgramListQuery, GetProgramListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProgramListQuery, GetProgramListQueryVariables>(
    GetProgramListDocument,
    options,
  );
}
export function useGetProgramListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProgramListQuery, GetProgramListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProgramListQuery, GetProgramListQueryVariables>(
    GetProgramListDocument,
    options,
  );
}
export function useGetProgramListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetProgramListQuery, GetProgramListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetProgramListQuery, GetProgramListQueryVariables>(
    GetProgramListDocument,
    options,
  );
}
export type GetProgramListQueryHookResult = ReturnType<typeof useGetProgramListQuery>;
export type GetProgramListLazyQueryHookResult = ReturnType<typeof useGetProgramListLazyQuery>;
export type GetProgramListSuspenseQueryHookResult = ReturnType<
  typeof useGetProgramListSuspenseQuery
>;
export type GetProgramListQueryResult = Apollo.QueryResult<
  GetProgramListQuery,
  GetProgramListQueryVariables
>;
export const GetProgramDetailDocument = gql`
  query GetProgramDetail($id: Int!) {
    programDetail(id: $id) {
      id
      image
      name
      version
      programUpdatedAt
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetProgramDetailQuery__
 *
 * To run a query within a React component, call `useGetProgramDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProgramDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetProgramDetailQuery, GetProgramDetailQueryVariables> &
    ({ variables: GetProgramDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProgramDetailQuery, GetProgramDetailQueryVariables>(
    GetProgramDetailDocument,
    options,
  );
}
export function useGetProgramDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProgramDetailQuery, GetProgramDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProgramDetailQuery, GetProgramDetailQueryVariables>(
    GetProgramDetailDocument,
    options,
  );
}
export function useGetProgramDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetProgramDetailQuery, GetProgramDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetProgramDetailQuery, GetProgramDetailQueryVariables>(
    GetProgramDetailDocument,
    options,
  );
}
export type GetProgramDetailQueryHookResult = ReturnType<typeof useGetProgramDetailQuery>;
export type GetProgramDetailLazyQueryHookResult = ReturnType<typeof useGetProgramDetailLazyQuery>;
export type GetProgramDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetProgramDetailSuspenseQuery
>;
export type GetProgramDetailQueryResult = Apollo.QueryResult<
  GetProgramDetailQuery,
  GetProgramDetailQueryVariables
>;
export const GetRamStatusListDocument = gql`
  query GetRamStatusList {
    ramStatusList {
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
  }
`;

/**
 * __useGetRamStatusListQuery__
 *
 * To run a query within a React component, call `useGetRamStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRamStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRamStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRamStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRamStatusListQuery, GetRamStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRamStatusListQuery, GetRamStatusListQueryVariables>(
    GetRamStatusListDocument,
    options,
  );
}
export function useGetRamStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRamStatusListQuery, GetRamStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRamStatusListQuery, GetRamStatusListQueryVariables>(
    GetRamStatusListDocument,
    options,
  );
}
export function useGetRamStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetRamStatusListQuery, GetRamStatusListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRamStatusListQuery, GetRamStatusListQueryVariables>(
    GetRamStatusListDocument,
    options,
  );
}
export type GetRamStatusListQueryHookResult = ReturnType<typeof useGetRamStatusListQuery>;
export type GetRamStatusListLazyQueryHookResult = ReturnType<typeof useGetRamStatusListLazyQuery>;
export type GetRamStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetRamStatusListSuspenseQuery
>;
export type GetRamStatusListQueryResult = Apollo.QueryResult<
  GetRamStatusListQuery,
  GetRamStatusListQueryVariables
>;
export const GetRamStatusDetailDocument = gql`
  query GetRamStatusDetail($id: Int!) {
    ramStatusDetail(id: $id) {
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
  }
`;

/**
 * __useGetRamStatusDetailQuery__
 *
 * To run a query within a React component, call `useGetRamStatusDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRamStatusDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRamStatusDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRamStatusDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetRamStatusDetailQuery, GetRamStatusDetailQueryVariables> &
    ({ variables: GetRamStatusDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRamStatusDetailQuery, GetRamStatusDetailQueryVariables>(
    GetRamStatusDetailDocument,
    options,
  );
}
export function useGetRamStatusDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRamStatusDetailQuery,
    GetRamStatusDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRamStatusDetailQuery, GetRamStatusDetailQueryVariables>(
    GetRamStatusDetailDocument,
    options,
  );
}
export function useGetRamStatusDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetRamStatusDetailQuery, GetRamStatusDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRamStatusDetailQuery, GetRamStatusDetailQueryVariables>(
    GetRamStatusDetailDocument,
    options,
  );
}
export type GetRamStatusDetailQueryHookResult = ReturnType<typeof useGetRamStatusDetailQuery>;
export type GetRamStatusDetailLazyQueryHookResult = ReturnType<
  typeof useGetRamStatusDetailLazyQuery
>;
export type GetRamStatusDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetRamStatusDetailSuspenseQuery
>;
export type GetRamStatusDetailQueryResult = Apollo.QueryResult<
  GetRamStatusDetailQuery,
  GetRamStatusDetailQueryVariables
>;
export const GetStorageStatusListDocument = gql`
  query GetStorageStatusList {
    storageStatusList {
      id
      pcId
      name
      total
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetStorageStatusListQuery__
 *
 * To run a query within a React component, call `useGetStorageStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorageStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorageStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStorageStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStorageStatusListQuery,
    GetStorageStatusListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStorageStatusListQuery, GetStorageStatusListQueryVariables>(
    GetStorageStatusListDocument,
    options,
  );
}
export function useGetStorageStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStorageStatusListQuery,
    GetStorageStatusListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStorageStatusListQuery, GetStorageStatusListQueryVariables>(
    GetStorageStatusListDocument,
    options,
  );
}
export function useGetStorageStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetStorageStatusListQuery,
        GetStorageStatusListQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetStorageStatusListQuery, GetStorageStatusListQueryVariables>(
    GetStorageStatusListDocument,
    options,
  );
}
export type GetStorageStatusListQueryHookResult = ReturnType<typeof useGetStorageStatusListQuery>;
export type GetStorageStatusListLazyQueryHookResult = ReturnType<
  typeof useGetStorageStatusListLazyQuery
>;
export type GetStorageStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetStorageStatusListSuspenseQuery
>;
export type GetStorageStatusListQueryResult = Apollo.QueryResult<
  GetStorageStatusListQuery,
  GetStorageStatusListQueryVariables
>;
export const GetStorageDetailDocument = gql`
  query GetStorageDetail($id: Int!) {
    storageStatusDetail(id: $id) {
      id
      pcId
      name
      total
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetStorageDetailQuery__
 *
 * To run a query within a React component, call `useGetStorageDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorageDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorageDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStorageDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetStorageDetailQuery, GetStorageDetailQueryVariables> &
    ({ variables: GetStorageDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStorageDetailQuery, GetStorageDetailQueryVariables>(
    GetStorageDetailDocument,
    options,
  );
}
export function useGetStorageDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetStorageDetailQuery, GetStorageDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStorageDetailQuery, GetStorageDetailQueryVariables>(
    GetStorageDetailDocument,
    options,
  );
}
export function useGetStorageDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetStorageDetailQuery, GetStorageDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetStorageDetailQuery, GetStorageDetailQueryVariables>(
    GetStorageDetailDocument,
    options,
  );
}
export type GetStorageDetailQueryHookResult = ReturnType<typeof useGetStorageDetailQuery>;
export type GetStorageDetailLazyQueryHookResult = ReturnType<typeof useGetStorageDetailLazyQuery>;
export type GetStorageDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetStorageDetailSuspenseQuery
>;
export type GetStorageDetailQueryResult = Apollo.QueryResult<
  GetStorageDetailQuery,
  GetStorageDetailQueryVariables
>;
export const GetStorageStatusByPcIdDocument = gql`
  query GetStorageStatusByPcId($pcId: Int!) {
    storageStatusByPcId(pcId: $pcId) {
      id
      pcId
      name
      total
      usage
      unit
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetStorageStatusByPcIdQuery__
 *
 * To run a query within a React component, call `useGetStorageStatusByPcIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorageStatusByPcIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorageStatusByPcIdQuery({
 *   variables: {
 *      pcId: // value for 'pcId'
 *   },
 * });
 */
export function useGetStorageStatusByPcIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetStorageStatusByPcIdQuery,
    GetStorageStatusByPcIdQueryVariables
  > &
    ({ variables: GetStorageStatusByPcIdQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStorageStatusByPcIdQuery, GetStorageStatusByPcIdQueryVariables>(
    GetStorageStatusByPcIdDocument,
    options,
  );
}
export function useGetStorageStatusByPcIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStorageStatusByPcIdQuery,
    GetStorageStatusByPcIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStorageStatusByPcIdQuery, GetStorageStatusByPcIdQueryVariables>(
    GetStorageStatusByPcIdDocument,
    options,
  );
}
export function useGetStorageStatusByPcIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetStorageStatusByPcIdQuery,
        GetStorageStatusByPcIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetStorageStatusByPcIdQuery, GetStorageStatusByPcIdQueryVariables>(
    GetStorageStatusByPcIdDocument,
    options,
  );
}
export type GetStorageStatusByPcIdQueryHookResult = ReturnType<
  typeof useGetStorageStatusByPcIdQuery
>;
export type GetStorageStatusByPcIdLazyQueryHookResult = ReturnType<
  typeof useGetStorageStatusByPcIdLazyQuery
>;
export type GetStorageStatusByPcIdSuspenseQueryHookResult = ReturnType<
  typeof useGetStorageStatusByPcIdSuspenseQuery
>;
export type GetStorageStatusByPcIdQueryResult = Apollo.QueryResult<
  GetStorageStatusByPcIdQuery,
  GetStorageStatusByPcIdQueryVariables
>;
export const GetTempStatusListDocument = gql`
  query GetTempStatusList {
    tempStatusList {
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
  }
`;

/**
 * __useGetTempStatusListQuery__
 *
 * To run a query within a React component, call `useGetTempStatusListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTempStatusListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTempStatusListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTempStatusListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTempStatusListQuery, GetTempStatusListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTempStatusListQuery, GetTempStatusListQueryVariables>(
    GetTempStatusListDocument,
    options,
  );
}
export function useGetTempStatusListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTempStatusListQuery,
    GetTempStatusListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTempStatusListQuery, GetTempStatusListQueryVariables>(
    GetTempStatusListDocument,
    options,
  );
}
export function useGetTempStatusListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTempStatusListQuery, GetTempStatusListQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTempStatusListQuery, GetTempStatusListQueryVariables>(
    GetTempStatusListDocument,
    options,
  );
}
export type GetTempStatusListQueryHookResult = ReturnType<typeof useGetTempStatusListQuery>;
export type GetTempStatusListLazyQueryHookResult = ReturnType<typeof useGetTempStatusListLazyQuery>;
export type GetTempStatusListSuspenseQueryHookResult = ReturnType<
  typeof useGetTempStatusListSuspenseQuery
>;
export type GetTempStatusListQueryResult = Apollo.QueryResult<
  GetTempStatusListQuery,
  GetTempStatusListQueryVariables
>;
export const GetTempStatusDetailDocument = gql`
  query GetTempStatusDetail($id: Int!) {
    tempStatusDetail(id: $id) {
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
  }
`;

/**
 * __useGetTempStatusDetailQuery__
 *
 * To run a query within a React component, call `useGetTempStatusDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTempStatusDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTempStatusDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTempStatusDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTempStatusDetailQuery,
    GetTempStatusDetailQueryVariables
  > &
    ({ variables: GetTempStatusDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTempStatusDetailQuery, GetTempStatusDetailQueryVariables>(
    GetTempStatusDetailDocument,
    options,
  );
}
export function useGetTempStatusDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTempStatusDetailQuery,
    GetTempStatusDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTempStatusDetailQuery, GetTempStatusDetailQueryVariables>(
    GetTempStatusDetailDocument,
    options,
  );
}
export function useGetTempStatusDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTempStatusDetailQuery, GetTempStatusDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTempStatusDetailQuery, GetTempStatusDetailQueryVariables>(
    GetTempStatusDetailDocument,
    options,
  );
}
export type GetTempStatusDetailQueryHookResult = ReturnType<typeof useGetTempStatusDetailQuery>;
export type GetTempStatusDetailLazyQueryHookResult = ReturnType<
  typeof useGetTempStatusDetailLazyQuery
>;
export type GetTempStatusDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetTempStatusDetailSuspenseQuery
>;
export type GetTempStatusDetailQueryResult = Apollo.QueryResult<
  GetTempStatusDetailQuery,
  GetTempStatusDetailQueryVariables
>;
