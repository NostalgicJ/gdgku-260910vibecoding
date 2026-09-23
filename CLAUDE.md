# CLAUDE.md

@AGENTS.md

이 파일은 Claude Code가 이 저장소에서 작업할 때 참고하는 가이드입니다.

## 프로젝트 개요

개인 소개용 **한 페이지짜리** 웹사이트입니다.

- 소개 글 (이름, 한 줄 소개, 자기소개 본문)
- 관심사 목록
- 외부 링크 (GitHub, 블로그, 이메일 등)

## 기술 스택

- **Next.js** (App Router)
- **TypeScript** (strict 모드)
- **Tailwind CSS**

## 범위 (Scope)

지금 하는 것:
- 로컬에서 `npm run dev`로 동작하는 단일 페이지

**지금 하지 않는 것** — 명시적으로 요청받기 전까지 추가하지 마세요:
- 배포 설정 (Vercel, GitHub Actions, Dockerfile 등)
- 데이터베이스, 외부 API, CMS 연동
- 인증, 서버 액션, API 라우트
- 추가 페이지나 라우트 (블로그, 상세 페이지 등)
- 불필요한 라이브러리 (상태 관리, UI 컴포넌트 라이브러리, 애니메이션 라이브러리 등)

## 데이터

- 모든 콘텐츠는 **로컬 JSON 파일** `data/profile.json`에서 관리합니다.
- 컴포넌트에 소개 글, 관심사, 링크 등의 텍스트를 하드코딩하지 마세요. 항상 JSON에서 읽어옵니다.
- JSON은 `import`로 정적으로 불러옵니다 (`fetch`나 `fs` 사용 X).
- JSON 구조에 대응하는 타입을 `types/profile.ts`에 정의하고, import한 데이터에 타입을 적용합니다.

구조 (자세한 타입은 `types/profile.ts`):

- `hero` — `{ greeting, name, highlight, tagline }` (`highlight`는 강조색으로 표시)
- 섹션 공통 형태 `Section<T>` — `{ emoji, title, items: T[] }`
  - `routine` — `Section<{ emoji, text }>` (상단 callout)
  - `keywords`, `movies`, `playlist`, `goals` — `Section<Card>`, `Card = { emoji, title, subtitle?, description }`
  - `weekend` — `Section<{ time, emoji, description }>`
  - `strengths` — `Section<{ title, description }>`
  - `sayHi` — `Section<string>`
- `links` — `{ label, url }[]` (비어 있으면 링크 영역을 렌더링하지 않음)
- `closing` — 마지막 인사 문구

새 카드형 섹션은 새 컴포넌트를 만들지 말고 `Card` 타입 + `components/CardGrid.tsx`를 재사용합니다.

필드를 추가·변경할 때는 `data/profile.json`과 `types/profile.ts`를 함께 수정합니다.

## 디렉터리 구조

```
app/
  layout.tsx        # 루트 레이아웃, 메타데이터
  page.tsx          # 유일한 페이지
  globals.css       # Tailwind 지시어
components/         # 섹션 단위 컴포넌트 (Intro, Interests, Links 등)
data/
  profile.json      # 콘텐츠 데이터
types/
  profile.ts        # 데이터 타입 정의
```

## 코딩 컨벤션

- 기본은 Server Component. 상호작용이 꼭 필요할 때만 `"use client"`를 사용합니다.
- 스타일은 Tailwind 유틸리티 클래스로만 작성합니다. 별도 CSS 파일/모듈은 만들지 않습니다.
- 모바일 우선 반응형으로 작성합니다.
- 시맨틱 HTML(`main`, `section`, `h1`~`h2`, `ul`)을 사용하고, 외부 링크에는 `target="_blank" rel="noopener noreferrer"`를 붙입니다.
- 컴포넌트는 함수형으로 작성하고, 파일당 컴포넌트 하나를 default export 합니다.
- `any` 사용 금지.

## 명령어

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드 (타입 체크 포함)
npm run lint    # ESLint
```

작업을 마쳤다고 보고하기 전에 `npm run build`와 `npm run lint`가 통과하는지 확인합니다.
