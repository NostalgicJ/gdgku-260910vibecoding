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
- JSON 구조에 대응하는 타입을 `types/profile.ts`에 정의합니다. `app/page.tsx`에서 `profileJson as Profile`로 타입을 붙입니다. JSON import는 `layout` 값을 `string`으로 넓혀 추론하기 때문입니다.

구조 (자세한 타입은 `types/profile.ts`):

- `stamp` — `{ top, bottom }`: 페이지 위아래 필름 롤 띠에 들어가는 문구
- `hero` — `{ eyebrow, title, name, nameEn, major }`
- `frames` — `Frame[]`: 본문 섹션 목록. 배열 순서가 곧 화면 순서입니다.
  - `Frame = { frame: "01", label: "DAILY ROUTINE", title, groups: Group[] }`
  - `Group = { label?, layout: "sheet" | "list" | "timeline", items: Entry[] }`
    - 그룹이 2개면 데스크톱에서 2열로 나란히 놓입니다.
  - `Entry = { title, meta?, description }`: 모든 항목이 같은 형태를 씁니다.
- `sayHello` — `{ label, title, items: string[] }`: 다크 푸터에 들어갑니다.
- `links` — `{ label, url }[]`: 비어 있으면 링크 영역을 렌더링하지 않습니다.
- `closing` — 마지막 인사 문구

새 섹션은 새 컴포넌트를 만들지 말고 `frames`에 항목을 추가합니다. 레이아웃은 기존 `layout` 세 가지 중에서 고릅니다.
- `sheet` → `ContactSheet`
- `list` → `EntryList`
- `timeline` → `Timeline`

필드를 추가·변경할 때는 `data/profile.json`과 `types/profile.ts`를 함께 수정합니다.

## 디렉터리 구조

```
app/
  layout.tsx        # 루트 레이아웃, 메타데이터
  page.tsx          # 유일한 페이지
  globals.css       # Tailwind, 색상/폰트 토큰, film-strip 유틸리티
components/         # FilmStamp, Hero, Frame(+ContactSheet/EntryList/Timeline), SayHello, LinkList
data/
  profile.json      # 콘텐츠 데이터
types/
  profile.ts        # 데이터 타입 정의
```

## 디자인 — 필름 카메라 & 컨셉 매거진

컨셉은 필름 밀착 인화지(Contact Sheet)와 아날로그 다이어리입니다. 정적이지만 감각적인 오프라인 잡지처럼 보여야 합니다.

- **인터랙션과 애니메이션은 넣지 않습니다.** `"use client"`, 클라이언트 JS, transition·animation 효과를 쓰지 않습니다.
- **카드 박스와 그림자를 쓰지 않습니다.** 영역은 얇은 실선(border)과 여백으로만 구분합니다. `shadow-*`, 배경이 채워진 둥근 카드는 쓰지 않습니다.
- **색상:** `globals.css`의 `@theme` 토큰만 씁니다. 임의의 hex 값이나 Tailwind 기본 팔레트는 쓰지 않습니다.
  - `paper` #F4F1EA — 배경
  - `ink` #1A1918 — 본문
  - `meta` #66635B — 보조 텍스트
  - `accent` #C84B31 — 포인트
  - `line` #D5D0C5 — 구분선
  - `night` #121211 — 푸터
- **accent는 아주 제한적으로 씁니다.** 현재는 섹션 헤더의 `FRAME 0N`에만 쓰고 있습니다.
- **폰트:**
  - 본문: Pretendard (`font-sans`, jsDelivr CDN)
  - 영문과 메타데이터: Courier Prime (`font-mono`, `next/font/google`)
  - 메타데이터는 `font-mono text-xs uppercase tracking-[0.2em] text-meta` 패턴을 따릅니다.
- **섹션 헤더:** `FRAME 0N — LABEL` 형식으로 쓰고, 오른쪽에 `0N/총개수`를 둡니다.
- **다크 모드:** 지원하지 않습니다. 인화지 톤을 고정합니다.

## 코딩 컨벤션

- 모든 컴포넌트는 Server Component입니다.
- 스타일은 Tailwind 유틸리티 클래스로 작성합니다. 커스텀 CSS는 `globals.css`의 테마 토큰과 `@utility`에만 둡니다.
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
