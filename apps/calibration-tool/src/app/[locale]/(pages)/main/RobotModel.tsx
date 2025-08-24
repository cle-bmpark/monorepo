import Image from 'next/image';

interface RobotModelProps {
  cameraRobotIP?: string;
  charucoRobotIP?: string;
}

export default function RobotModel({ cameraRobotIP, charucoRobotIP }: RobotModelProps) {
  const isCamera = !!cameraRobotIP;
  const iconSrc = isCamera ? '/camera.svg' : '/charucoboard.svg';
  const label = isCamera ? 'UR-CameraRobotModel' : 'UR-CharucoRobotModel';
  const ip = isCamera ? cameraRobotIP : charucoRobotIP;

  if (!cameraRobotIP && !charucoRobotIP) return;

  return (
    <div className='text-medium-16 flex items-start gap-1'>
      <Image className='my-1' src={iconSrc} alt={`${label}_icon`} width={16} height={16} />
      <div className='flex flex-col gap-0.5'>
        <p>{label}</p>
        <p>{ip}</p>
      </div>
    </div>
  );
}
