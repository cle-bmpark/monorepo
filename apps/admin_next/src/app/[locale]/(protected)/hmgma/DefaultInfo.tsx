import { pcListType } from '@/types/graphql';
import Badge from '@repo/ui/src/components/badge/Badge';
import LinkButton from '@repo/ui/src/components/button/LinkButton';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface DefaultInfoProps {
  data: pcListType;
}

export default function DefaultInfo({ data }: DefaultInfoProps) {
  const t = useTranslations('pc');
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
        <Badge value={data.line.name} color={'blue'} />
        <Badge value={data.process.name} color={'green'} />
        <Badge value={data.position.name} color={'red'} />
        <Badge value={data.brain} color={'yellow'} />
      </div>
    </div>
  );
}
