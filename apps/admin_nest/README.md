## 시작하기
1. `nest` 전역 설치하기 : `npm i -g @nestjs/cli`
2. `pnpm` 전역 설치하기 : `npm install -g pnpm`

## Nest 프로젝트 기본 환경
1. `pnpm` 사용
2. 코드 우선 방식 채택

## 실행하기
- `pnpm run start`: 실행
- `pnpm run start:dev`: 개발 환경 실행
- 브라우저에서 [localhost:3000](http://localhost:3000/graphql) 이동
- 쿼리문 날려서 확인하기

## Lint, Format 검사
- `pnpm run lint`: Lint 코드 문법 검사
- `pnpm run format`: Format 코드 정렬 검사

## 예시
- `nest g resource 폴더명` 실행 시, 관련 파일 생성
- Delete `␍`eslintprettier/prettier 오류: (줄 시퀀스의 끝 선택) VS Code 하단 우측 > CRLF -> LF 로 변경 필요

## DB
- `PostgreSQL`의 `pgAdmin4`(C:\Program Files\PostgreSQL\17\pgAdmin 4) GUI 사용
- Mockup Data
- DB 구조(docs/db_diagram.svg): [text](https://dbdiagram.io/d/68468226058073439759dbef)

### PostgreSQL 로컬 DB 를 서버에 올리기


## 네이밍 컨벤션
- DB Column: [camelCase] TypeORM 은 기본적으로 camelCase 엔티티 필드명을 사용합니다.

## 코드 컨벤션
- 절대 경로