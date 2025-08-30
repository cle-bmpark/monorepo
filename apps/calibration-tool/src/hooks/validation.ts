'use client';

import { useTranslations } from 'next-intl';

export function useValidationProjectName(value: string): { valid: boolean; message?: string } {
  const t = useTranslations('new-project-modal');

  if (value.length === 0) {
    return { valid: true };
  }
  if (!/^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]+$/.test(value)) {
    return { valid: false, message: t('input-error-include') };
  }
  return { valid: true };
}
