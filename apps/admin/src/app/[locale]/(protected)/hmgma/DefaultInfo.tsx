import Badge from '@/components/badge/Badge';
import LinkButton from '@/components/button/LinkButton';
import { defaultType, enumColors } from '@/dummy/HMGMA';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface DefaultInfoProps {
  data: defaultType;
}

export default function DefaultInfo({ data }: DefaultInfoProps) {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const router = useRouter();

  return (
    <div className='flex items-center justify-between'>
      <div>
        <LinkButton
          value={data.serialNumber.toString()}
          onClick={() => {
            router.push(`/hmgma/${data.serialNumber}`);
          }}
        />
        {!data.isProgram && (
          <p className='text-primary-600'>
            {t('isProgram')} : {tHMGMA('on&off', { state: String(data.isProgram) })}
          </p>
        )}
      </div>
      <div className='flex gap-2'>
        <Badge value={data.line} color={enumColors[data.line]} />
        <Badge value={data.process} color={enumColors[data.process]} />
        <Badge value={data.position} color={enumColors[data.position]} />
        <Badge value={data.pc} color={enumColors[data.pc]} />
      </div>
    </div>
  );
}
