import ProjectTypeBadge from '@/components/ProjectTypeBadge';
import { projectListType } from '@/dummies/ProjectList';
import { formatDate } from '@/utils/date';
import LinkButton from '@ui/components/button/LinkButton';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { useTranslations } from 'next-intl';
import { BsInfoCircle } from 'react-icons/bs';
import { LuArrowUpRight } from 'react-icons/lu';
import RobotModel from './RobotModel';
import TableSelectButton from './TableSelectButton';

interface TableProps {
  data: projectListType[];
}

export default function Table({ data }: TableProps) {
  const t = useTranslations('main');
  const grey300 = useColorByTheme('grey-300');

  return (
    <table className='border-grey-300 flex flex-1 border-collapse flex-col border'>
      <thead className='bg-grey-50 text-grey-700 text-regular-14 flex w-full break-keep px-1'>
        <tr className='flex w-full'>
          <td className='w-[10%] px-3 py-2.5 text-center'>{t('project-type')}</td>
          <td className='w-[16%] px-3 py-2.5'>{t('project-name')}</td>
          <td className='w-[12%] px-3 py-2.5'>
            {t('camera-model')}/{t('serial-number')}
          </td>
          <td className='w-[27%] px-3 py-2.5'>
            {t('robot-model')}/{t('ip')}
          </td>
          <td className='w-[23%] px-3 py-2.5'>
            {t('calibration-image-path')}/{t('image-count')}
          </td>
          <td className='w-[12%] px-3 py-2.5'>{t('modified-date')}</td>
          <td className='h-12 w-12' />
        </tr>
      </thead>

      <tbody className='border-t-1 border-grey-300 flex flex-1 flex-col'>
        {data.length < 1 && (
          <div className='flex flex-1 items-center justify-center gap-1'>
            <BsInfoCircle size={24} color={grey300} className='p-0.5' />
            <p className='text-grey-500 text-regular-16'>{t('no-project')}</p>
          </div>
        )}

        {data.map((item, index) => (
          <tr
            className={`text-medium-16 = border-grey-300 hover:bg-grey-950/4 flex flex-1 cursor-pointer ${data.length !== index + 1 && 'border-b'}`}
            key={item.projectName}
          >
            <td className='ml-1 flex w-[10%] justify-center px-3.5 py-3'>
              <div>
                <ProjectTypeBadge type={item.projectType} />
              </div>
            </td>
            <td className='flex w-[16%] px-3.5 py-3'>{item.projectName}</td>
            <td className='flex w-[12%] px-3.5 py-3'>
              <p>{item.cameraModel}</p>
              <p>{item.cameraNumber}</p>
            </td>
            <td className='flex w-[27%] px-3.5 py-3'>
              <div className='flex gap-2'>
                <RobotModel cameraRobotIP={item.cameraRobotIP} />
                <RobotModel charucoRobotIP={item.charucoRobotIP} />
              </div>
            </td>
            <td className='flex w-[23%] px-3.5 py-3'>
              <div>
                <LinkButton value={item.imagePath} icon={<LuArrowUpRight />} iconPosition='right' />
                <p>
                  {item.imageCount} {t('image(s)')}
                </p>
              </div>
            </td>
            <td className='flex w-[12%] px-3.5 py-3'>
              {formatDate({ dateInput: item.modifiedDate, type: 'yyyy/mm/dd, hh:mm' })}
            </td>
            <td className='mr-1 h-12 w-12'>
              <TableSelectButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
