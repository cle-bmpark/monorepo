import { registerEnumType } from '@nestjs/graphql';

export enum BrainEnum {
  MAIN = 'MAIN',
  SPARE = 'SPARE',
}
registerEnumType(BrainEnum, {
  name: 'BrainEnum',
  description: 'PC 종류: MAIN, SPARE',
});

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: '정렬 순서: 오름차순(ASC), 내림차순(DESC)',
});

export enum PcSortField {
  SERIAL_NUMBER = 'serialNumber',
  LINE_ID = 'lineId',
  POSITION_ID = 'positionId',
  PROCESS_ID = 'processId',
  BRAIN = 'brain',
  IS_LICENSE = 'isLicense',
  IS_NETWORK = 'isNetwork',
  IS_PROGRAM = 'isProgram',
  ANYDESK_IP = 'anydeskIp',
  LAUNCHER_UPDATED_AT = 'launcherUpdatedAt',
}

registerEnumType(PcSortField, {
  name: 'PcSortField',
  description: 'PC 목록 정렬 기준 필드',
});
