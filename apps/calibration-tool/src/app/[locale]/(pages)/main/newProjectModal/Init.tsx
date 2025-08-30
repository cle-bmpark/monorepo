import { ProjectTypeEnum } from '@/dummies/Enum';
import { useValidationProjectName } from '@/hooks/validation';
import LabeledInput from '@ui/components/input/LabeledInput';
import SelectFileInput from '@ui/components/input/SelectFileInput';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import CalibrationTypeBox from './CalibrationTypeBox';

export default function Init() {
  const ProjectTypeList = Object.values(ProjectTypeEnum);

  const t = useTranslations('new-project-modal');

  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState<ProjectTypeEnum | null>(null);
  const validateProjectName = useValidationProjectName(projectName);

  return (
    <div className='flex flex-col justify-between gap-8'>
      <div className='flex flex-col gap-1'>
        <p>{t('project-name')}</p>
        <LabeledInput
          placeholder={t('project-name')}
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          label={`${projectName.length}/50`}
          maxLength={50}
          isError={!validateProjectName.valid}
          errorMessage={validateProjectName.message}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <p>{t('calibration-image-path')}</p>
        <SelectFileInput
          accept='.png,.jpg,.jpeg'
          multiple={false}
          placeholder={t('calibration-image-path-placeholder')}
        />

        <div className='flex flex-col gap-1'>
          <p>{t('calibration-type')}</p>
          <div className='grid w-fit grid-cols-2 gap-2'>
            {ProjectTypeList.map((item, index) => (
              <CalibrationTypeBox
                type={item}
                key={`calibration_type_${item}_${index}`}
                isSelected={projectType === item}
                onClick={() => setProjectType(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
