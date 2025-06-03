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
