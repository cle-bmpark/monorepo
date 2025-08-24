import { ProjectTypeEnum } from './Enum';

export interface projectListType {
  projectType: ProjectTypeEnum;
  projectName: string;
  cameraModel: string;
  cameraNumber: string;
  cameraRobotIP?: string;
  charucoRobotIP?: string;
  imagePath: string;
  imageCount: number;
  modifiedDate: Date;
}

export const projectList: projectListType[] = [
  {
    projectType: ProjectTypeEnum.Intrinsic,
    projectName: 'Project name 01',
    cameraModel: 'CoPick 2D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: undefined,
    charucoRobotIP: undefined,
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.BirdEye,
    projectName: 'Project name 02',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: undefined,
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandEye,
    projectName: 'Project name 03',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: undefined,
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 04',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 05',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 06',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 07',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 08',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
  {
    projectType: ProjectTypeEnum.HandToHand,
    projectName: 'Project name 09',
    cameraModel: 'CoPick 3D',
    cameraNumber: 'CP2411S0047C',
    cameraRobotIP: '192.168.0.1:5555',
    charucoRobotIP: '192.168.0.1:5555',
    imagePath: 'C:/Users/hyjoung/workspace/calibration/2025',
    imageCount: 0,
    modifiedDate: new Date('2025-01-01 16:00'),
  },
];
