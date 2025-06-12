# 🛠️ **시작하기**

### 실행 명령어
1. 터미널에서 `npm i` 실행합니다.
2. 터미널에서 `pnpm next dev` 실행합니다.
3. localhost:3000 에 진입합니다.

- **`pnpm next dev`** : 개발 서버 시작 [http://localhost:3000](http://localhost:3000)
- **`pnpm next build`** : 프로덕션을 위한 애플리케이션 빌드
- **`pnpm next start`** : 프로덕션 서버 시작
- **`pnpm next lint`** : ESLint 실행
- **`pnpm lint-staged`** : 스테이징된 파일 코드 컨벤션 검사
- **`pnpm run i18n-check`** : 다국어 json 파일 일치 검사

---

# ✨ **코드 컨벤션**

### 구성 파일

- **`tsconfig.json`** : 타입 검사
- **`eslint.config.mjs`** : 문법 검사
- **`prettier.config.mjs`** : 코드 포맷팅

### 자동 포맷팅 적용 목록

1. **import**: 순서 정렬, 사용하지 않는 목록 삭제
2. **tailwindcss**: 순서 정렬, 중복 제거, 띄어쓰기 통일  
   (prettier.config.mjs 파일 참조)

### 규칙

1. **사용하지 않는 서드파티 패키지는 `package.json`에서 제거합니다.**
2. **동일한 기능의 라이브러리를 혼용하지 않습니다.**  
   예) `tailwindcss`, `css`, `scss`, `sass` 등을 함께 사용하지 않음
3. **type 에러를 없애기 위해서 as 로 강제 선언하지 않습니다.**

> 💡 **Husky + lint-staged**  
> 커밋 전 `npx lint-staged` `npm run i18n` 를 실행합니다.  
> ESLint 오류 발생 시 Git 커밋이 차단됩니다.

### Type 정의

- 공통 컴포넌트에서 사용하는 type 은 따로 파일을 분리하지 않고, 맨 상단에 정의합니다.
- types 폴더 내부에는 최대한 type을 정의하지 않습니다. type 이 발생하는 파일에 정의합니다.
> type 추적을 용이하게 하기 위함입니다.

---

# 🎨 **스타일 가이드**

### Tailwind CSS

**Next.js 15**부터 `tailwind.config.js`가 제거되고 `global.css`만 사용합니다.

### 사용자 지정 색상 (Custom Colors)

`global.css`의 `:root` 에서 다크/라이트 모드에 따른 색상 설정 후, `theme`에서 정의

### 디자인 가이드

- [CLE Design system](https://www.figma.com/design/tbtPLjPDYOK9qm76OjHwxI/Design-system?node-id=7-316&m=dev)

### 공통 컴포넌트 규칙

1. 단일 책임 원칙
- 하나의 컴포넌트는 하나의 목적만 가집니다.
- 예) `textInput`, `DateInput`, `SelectInput`

2. 내부 상태 최소화
- 내부 상태를 최소화 하고, 외부에서 제어 가능하도록 합니다.
- 예) `value`, `onChange`, `isOpen`

3. 점진적인 추상화
- 반복되는 사용 패턴이 생길 때, 추상화 및 리팩터링 합니다.

### icon

`react-icons` 라이브러리사용

### UI Libraray

ui 라이브러리는 되도록 사용하지 않습니다.
기능 구현이 복잡하여 사용해야 하는 경우, Headless UI Library 를 권장합니다.
(단, 의존성 충돌이 일어나면 안됩니다.)

---

# 🌐 다국어 지원 (Internationalization)

### 지원 언어
- 🇰🇷 ko (한국어) - 기본 언어
- 🇺🇸 en (영어)

### URL 구조
- /ko/ → 한국어 (https://domain.com/ko/...)
- /en/ → 영어 (https://domain.com/en/...)

### i18n 검사 도구

en.json, ko.json 관련 키 누락, 불일치 등을 확인을 위해 다음 명령어를 실행합니다.

`npm run i18n-check`

검사 항목 (en.json 기준)
1. 누락된 번역 키: en.json에 없는 키
2. 불일치 키: 파일 간 키 구조 불일치
3. 미사용 키: 코드에서 사용되지 않는 키
4. 정의되지 않은 키: 코드에 사용됐지만 번역 파일에 없는 키


### 폴더 구조 예시
  ```plaintext
  /messages
    ├── en.json
    └── ko.json
  ```

### 다국어 json 파일 key 작성 규칙
1. 페이지 네이밍
- `page.tsx`가 위치한 **폴더명을 기준**으로 네임스페이스를 설정합니다.  
  예:  
  경로가 `src/components/page.tsx`인 경우  
  → `components: { ... }`

2. Key depth 제한
- **Key depth는 최대 2단계**까지만 허용됩니다.
- ❌ 예시 (허용되지 않음):
  ```json
  {
    "root": {
      "mode": {
        "title": "제목"
      }
    }
  }

번역 추가 시 **기본 언어(en)**와 다른 언어(ko) 모두 업데이트해야 합니다.

---

# 모달창 관리

### 호출
1. `/src/app/locale/layout.tsx` 에서 모든 modal 창을 단 한 번만 호출합니다.
2. `jotai` 전역 변수 useAtom을 이용하여 modal 값을 관리합니다.
3. 파일: `Modal.tsx`, `Popup.tsx`, `ProgressModal.tsx`, `Toast.tsx`

---

# 📁 **Git**

(내용 필요 시 추가)

---

# 🧩 **주요 라이브러리**

- **Typia** : 런타임 타입 검증
- **GraphQL** : API 런타임 환경
- **Immer**: 상태의 불변성 관리

---

# GraphQL 스키마 업데이트 방법

1. `src/graphql/generated/hmgma.graphql` 파일에서 `query`, `mutation` 문 추가
2. `pnpm run graphql:codegen` 실행
3. `src/graphql/generated/graphql.tsx` 파일 업데이트 완료

** .graphql 파일 변경/추가/삭제 될 때마다 명령어를 실행시켜야 합니다.

---

# 🚀 **배포**

- https://monitoring-admin.vercel.app/
