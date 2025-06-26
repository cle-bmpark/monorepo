import {
  GetLineListQuery,
  GetPcDetailQuery,
  GetPcListByIdsQuery,
  GetPcListQuery,
  GetPositionListQuery,
  GetProcessListQuery,
} from '@/graphql/generated/graphql';

// pc list
export type pcListType = GetPcListQuery['pcList']['items'][number];

export type PcProgramType = pcListType['pcPrograms'][number];

// pc detail
export type pcDetailType = GetPcDetailQuery['pcDetail'];

export type pcProgramsType = pcDetailType['pcPrograms'];

export type programsType = pcProgramsType[number]['program'];

// pc list by ids
export type pcListByIdsType = GetPcListByIdsQuery['pcsByIds'][number];

export type pcDriversType = GetPcDetailQuery['pcDetail']['pcDrivers'];

export type driverType = pcDriversType[number]['driver'];

// filter: position list
export type positionType = GetPositionListQuery['positionList'][number];

// filter: process list
export type processType = GetProcessListQuery['processList'][number];

// filter: line list
export type lineType = GetLineListQuery['lineList'][number];
