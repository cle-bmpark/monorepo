import ProjectTypeBadge from '@/components/ProjectTypeBadge';
import { projectListType } from '@/dummies/ProjectList';
import { formatDate } from '@/utils/date';
import LinkButton from '@ui/components/button/LinkButton';
import Pagination from '@ui/components/table/Pagination';
import { useColorByTheme } from '@ui/hooks/useColorByTheme';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { LuArrowUpRight } from 'react-icons/lu';
import RobotModel from './RobotModel';
import TableSelectButton from './TableSelectButton';

interface TableProps {
  data: projectListType[];
}

export default function Table({ data }: TableProps) {
  const pageSize = 10;
  const totalPages: number = Math.ceil(data.length / pageSize);
  const t = useTranslations('main');
  const grey300 = useColorByTheme('grey-300');
  const [selectPage, setSelectPage] = useState(1);

  const startIndex = (selectPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);

  return (
    <div className='border-grey-300 flex min-w-fit flex-1 border-collapse flex-col border'>
      <ul className='bg-grey-50 text-grey-700 text-regular-14 flex w-full break-keep px-1'>
        <li className='w-[10%] px-3 py-2.5 text-center'>{t('project-type')}</li>
        <li className='w-[16%] px-3 py-2.5'>{t('project-name')}</li>
        <li className='w-[12%] px-3 py-2.5'>
          {t('camera-model')}/{t('serial-number')}
        </li>
        <li className='w-[27%] px-3 py-2.5'>
          {t('robot-model')}/{t('ip')}
        </li>
        <li className='w-[23%] px-3 py-2.5'>
          {t('calibration-image-path')}/{t('image-count')}
        </li>
        <li className='w-[12%] px-3 py-2.5'>{t('modified-date')}</li>
        <li className='h-12 w-12' />
      </ul>

      <div className='border-t-1 border-grey-300 flex flex-1 flex-col justify-between'>
        {pageData.length < 1 && (
          <div className='flex flex-1 items-center justify-center gap-1'>
            <BsInfoCircle size={24} color={grey300} className='p-0.5' />
            <p className='text-grey-500 text-regular-16'>{t('no-project')}</p>
          </div>
        )}

        <div>
          {pageData.map((item, index) => (
            <ul
              className='text-medium-16 border-grey-300 hover:bg-grey-950/4 flex cursor-pointer border-b'
              key={`${item.projectName}_${index}`}
            >
              <li className='ml-1 flex w-[10%] justify-center px-3.5 py-3'>
                <div>
                  <ProjectTypeBadge type={item.projectType} />
                </div>
              </li>
              <li className='flex w-[16%] px-3.5 py-3'>{item.projectName}</li>
              <li className='flex w-[12%] px-3.5 py-3'>
                <p>{item.cameraModel}</p>
                <p>{item.cameraNumber}</p>
              </li>
              <li className='flex w-[27%] px-3.5 py-3'>
                <div className='flex gap-2'>
                  <RobotModel cameraRobotIP={item.cameraRobotIP} />
                  <RobotModel charucoRobotIP={item.charucoRobotIP} />
                </div>
              </li>
              <li className='flex w-[23%] px-3.5 py-3'>
                <div className='flex flex-col gap-0.5'>
                  <LinkButton
                    value={item.imagePath}
                    icon={<LuArrowUpRight />}
                    iconPosition='right'
                  />
                  <p>
                    {item.imageCount} {t('image(s)')}
                  </p>
                </div>
              </li>
              <li className='flex w-[12%] px-3.5 py-3'>
                {formatDate({ dateInput: item.modifiedDate, type: 'yyyy/mm/dd, hh:mm' })}
              </li>
              <li className='mr-1 h-12 w-12'>
                <TableSelectButton />
              </li>
            </ul>
          ))}
        </div>

        <Pagination
          selectPage={selectPage}
          setSelectPage={setSelectPage}
          totalPages={totalPages}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
