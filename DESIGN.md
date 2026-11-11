# EUNJI Portfolio Design System

`feat/resume-portfolio`(2026-11-11)부터 적용하는 개발자 이력서형 시각 언어다. main에 병합되기 전까지는 main의 실제 코드가 production 기준이다.

## 방향

"도구를 만드는 Clinical DM". 실제 개발자들이 제출하는 이력서 포트폴리오처럼 **깔끔하고 단정한 전문가 톤**을 쓴다.

- 흰 바탕, 진한 남색 글자, 회색 선
- 시그니처 색은 연보라 하나 (배경·태그는 옅은 연보라, 글자·버튼은 읽히도록 한 단계 진한 연보라)
- 날짜·라벨·기술 태그는 고정폭 글꼴
- 장식, 그라데이션, 큰 그림자, 과한 motion 없음

## 토큰

`src/styles/tokens.css`가 기준이다. 색은 연보라 계열 `--accent`(#6a55a6, 흰 바탕 대비 약 5.6:1), `--accent-soft`(#f3f0fb), `--accent-line`(#d9d0f0), `--accent-wash`(#fbfaff)만 포인트로 쓰고, 나머지는 `--text`, `--text-2`, `--text-3`, `--line`, `--surface`로 표현한다. 새 색을 하드코딩하지 않는다.

글꼴: Pretendard Variable(본문), JetBrains Mono(날짜·라벨·태그). 둘 다 npm 패키지로 사이트에 포함해 외부 글꼴 서버를 부르지 않는다. 화면의 글자는 12px보다 작게 하지 않는다.

## 레이아웃

- 데스크톱(>960px): 왼쪽 320px 사이드바(아바타, 이름, 직함, 한 줄 소개, 섹션 목차, GitHub)가 고정되고 오른쪽 760px 본문이 스크롤된다. 홈에서는 스크롤 위치에 따라 목차가 강조된다.
- 960px 이하: 사이드바가 위로 올라가고 목차는 줄바꿈되는 가로 목록이 된다. 640px 이하에서는 사이드바 한 줄 소개를 숨긴다.
- 최소 폭 320px, 가로 스크롤 없음.
- 홈 섹션 순서: About → Experience(최신순) → Skills → Work → Projects(도구 / 제품 / 그 밖에) → How I work → Contact.

## 컴포넌트

- `Sidebar`, `SiteFooter` (`src/components/Sidebar.tsx`)
- `EntryList`, `ProjectGroups`, `AlsoList`, `Chips` (`src/components/EntryList.tsx`)
- 목록형 행은 `.row-list`(날짜 열 + 내용 열)를 재사용한다.

## Motion

hover 색·테두리 변화와 화살표 3px 이동 정도만 쓴다(150–200ms). `prefers-reduced-motion`이면 전환과 부드러운 스크롤을 끈다.

## 아바타

사용자가 고른 노트북 작업 캐릭터를 64px 원형으로만 쓴다(`public/images/eunji-avatar-720.webp`). 원본 PNG는 레포에 넣지 않는다.
