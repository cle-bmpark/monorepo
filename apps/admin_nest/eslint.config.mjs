// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs', 'prettier.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
  {
    rules: {
      // ----------------- 일반 ESLint 규칙 강화 -----------------
      'no-console': 'warn', // console.log 사용 경고
      'no-debugger': 'error', // debugger 사용 금지 (오류)
      'no-unused-vars': 'off', // TypeScript 버전이 처리하므로 끔
      'no-empty': 'error', // 빈 블록 금지 (오류)

      // ----------------- TypeScript ESLint 규칙 강화 -----------------
      '@typescript-eslint/no-explicit-any': 'error', // `any` 타입 사용 허용 (프로젝트 상황에 따라 `warn` 또는 `error`로 변경 고려)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }, // 사용되지 않는 변수/인자 오류, `_`로 시작하는 것은 무시
      ],
      '@typescript-eslint/no-floating-promises': 'error', // 비동기 함수에서 반환되는 Promise가 처리되지 않을 경우 오류
      '@typescript-eslint/no-unsafe-argument': 'error', // 안전하지 않은 타입으로 인자 전달 시 오류
      '@typescript-eslint/no-unsafe-assignment': 'error', // 안전하지 않은 할당 시 오류
      '@typescript-eslint/no-unsafe-call': 'error', // 안전하지 않은 함수 호출 시 오류
      '@typescript-eslint/no-unsafe-member-access': 'error', // 안전하지 않은 멤버 접근 시 오류
      '@typescript-eslint/no-unsafe-return': 'error', // 안전하지 않은 반환 시 오류
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowAny: false, allowBoolean: false, allowNullish: false, allowNumber: false }, // 템플릿 리터럴 내에서 String이 아닌 타입 사용 금지 (더 엄격)
      ],
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시 강제
      '@typescript-eslint/no-inferrable-types': 'off', // 명시적 타입 지정이 불필요한 경우 허용 (string = 'abc'와 같은 경우)
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      '@typescript-eslint/await-thenable': 'error', // await 불가능한 값 await 시 오류
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 타입 정의는 interface만 허용 (type Alias 대신)
      '@typescript-eslint/prefer-nullish-coalescing': 'error', // || 대신 ?? 사용 권장
      '@typescript-eslint/prefer-optional-chain': 'error', // && 대신 ?. 사용 권장
      '@typescript-eslint/no-non-null-assertion': 'warn', // ! (non-null assertion) 사용 경고 (필요에 따라 error)
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ], // Promise 오용 방지

      // ----------------- 코드 스타일 및 가독성 -----------------
      complexity: ['warn', { max: 100 }], // 함수의 복잡도 제한 (사이클로매틱 복잡도)
      'max-lines-per-function': ['warn', { max: 1000, skipBlankLines: true, skipComments: true }], // 함수당 라인 수 제한
      'max-depth': ['warn', 4], // 블록 중첩 깊이 제한
      'prefer-const': 'error', // const 사용 강제
    },
  },
);
