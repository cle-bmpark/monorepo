'use client';

import CheckBox from '@/components/radio/CheckBox';
import { useTranslations } from 'next-intl';

// 런처 이전
const list_before = [
  { isCheck: true, part: 'Front-End', content: 'Table: 스크롤, 50개 씩 보기, pagination 추가' },
  { isCheck: true, part: 'Front-End', content: 'Any Desk 열기' },
  { isCheck: true, part: 'Front-End', content: '프로그램 종료 여부 표시, 런처 업데이트 버튼' },
  { isCheck: false, part: 'Front-End', content: 'PC 업데이트 정보 비교하기' },
  {
    isCheck: false,
    part: 'Front-End',
    content: '상세 페이지: 배포 도우미 기능, 배포 도우미 로그표, PC 헬스 정보',
  },
  { isCheck: false, part: 'Front-End', content: '라이선스 관리 페이지' },
  { isCheck: false, part: 'Front-End', content: '로그인 페이지' },
  { isCheck: false, part: 'Front-End', content: '회원 관리 페이지' },
  {
    isCheck: false,
    part: 'Front-End',
    content: '배포도우미 기능 추가: 검색/정렬/필터, 백업 전체 기록 등',
  },
  {
    isCheck: false,
    part: 'Front-End',
    content: '자주 쓰는 필터 추가',
  },
  { isCheck: false, part: 'Back-End', content: 'menu list 넘기기' },
  { isCheck: false, part: 'Back-End', content: '정렬/필터/pagination/n개씩 호출 기능' },
  { isCheck: false, part: 'Back-End', content: '프로그램 종료 여부: 상단 위치' },
  { isCheck: false, part: 'Front-End', content: 'Scroll Table 무한 스크롤 기능 추가' },
  {
    isCheck: false,
    part: 'Back-End',
    content: '검색 기능: 태그 추가, 프로그램 검색, front-frt 등 검색 시 나오도록',
  },
  { isCheck: false, part: 'Back-End', content: '구글 로그인/회원가입 기능' },
  { isCheck: false, part: 'Back-End', content: '라이선스 발급 요청/승인/관리' },
  { isCheck: false, part: 'Back-End', content: '권한 관리: Super / Admin / Manager' },
  {
    isCheck: false,
    part: 'Back-End',
    content: '브라우저 알림 추가 - 프로그램 종료 여부 (고위드)',
  },
  {
    isCheck: false,
    part: 'Back-End',
    content: '사용자 설정: 자주 사용하는 필터, 브라우저 새로고침 시간 설정, 북마크',
  },
  { isCheck: false, part: 'Back-End', content: '중복 정렬 기능 (monday)' },
  { isCheck: false, part: 'Back-End', content: '권한에 따른 pc 관리: 수정/삭제/추가' },
  { isCheck: false, part: 'Back-End', content: '모노레포 - FE/BE 합치기' },
];

// 런처 이후
const list_after = [
  { isCheck: false, part: 'Front-End', content: '로그 정보 확인: 재석님 Docker Container 띄우기' },
  {
    isCheck: false,
    part: 'Front-End',
    content: 'Table 라벨링 기능 (필요 여부 확인: 개발자가 보기 때문에 오히려 방해가 될 수 있음)',
  },
  { isCheck: false, part: 'Back-End', content: '프로그램 종료/재시작 시, 슬랙 알림' },
  { isCheck: false, part: 'Back-End', content: 'Luncher 업데이트 기능' },
  { isCheck: false, part: 'Back-End', content: 'PC 원격 접속' },
  { isCheck: false, part: 'Back-End', content: '배포 도우미 기능 반영' },
  { isCheck: false, part: 'Back-End', content: 'PC 헬스 정보 반영' },
  {
    isCheck: false,
    part: 'Back-End',
    content: '단일 서버 통합: 네트워크와 상관없이 접근가능한 브라우저',
  },
  { isCheck: false, part: 'Back-End', content: 'PC 실시간 성능 시스템 관제 - datadog, Grafana' },
];

export default function ToDo() {
  const t = useTranslations('todo');

  return (
    <div className='flex flex-col gap-8'>
      <h1>{t('title')}</h1>
      <div className='flex flex-col gap-4'>
        <h2>{t('sub-title-1')}</h2>
        <ul className='flex flex-col gap-4'>
          {list_before.map((item) => (
            <li className='flex items-center' key={`checkbox_${item.content}`}>
              <CheckBox label={`[${item.part}] ${item.content}`} isCheck={item.isCheck} />
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2>{t('sub-title-2')}</h2>
        <ul className='flex flex-col gap-4'>
          {list_after.map((item) => (
            <li className='flex items-center' key={`checkbox_${item.content}`}>
              <CheckBox label={`[${item.part}] ${item.content}`} isCheck={item.isCheck} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
