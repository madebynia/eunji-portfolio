# EUNJI Portfolio — Current Handoff

**Updated:** 2026-11-11  
**Repository:** `madebynia/eunji-portfolio`  
**Production branch:** `main`  
**Production URL:** https://eunji-portfolio.pages.dev (Cloudflare Pages, main push 시 자동 배포)

## 현재 제품

HOME · WORK · STORY 세 축으로 개인 경력과 작업을 보여주는 React/Vite 포트폴리오다.

현재 main은:
- 기본 3-page 구조
- React Router
- Vitest + Testing Library
- Cloudflare Pages SPA fallback
- 현재 pastel/editorial visual system (main 기준)

을 포함한다.

## 현재 작업선

`feat/resume-portfolio`(2026-11-11)는 PR #6으로 main에 병합되어 배포됐다. "도구를 만드는 Clinical DM" 정체성의 개발자 이력서형 사이드바 레이아웃(연보라 시그니처)으로 전면 개편했고, 업무 도구·제품 프로젝트 상세 페이지를 추가했다. 기준은 이 브랜치의 `DESIGN.md`와 `docs/resume-portfolio-design.md`다.

`feat/portfolio-v2` / PR #1은 이전 Home redesign 후보이며 아직 Draft다. 이력서형으로 방향을 정했으므로 정리(닫기) 대상이다.
현재 main과 diverged 상태이므로 병합 전 main 최신 변경을 반영하고 다시 리뷰해야 한다.

PR #1의 디자인은 **후보**이지 현재 제품 authority가 아니다.

## Authority

1. 실제 main 코드와 테스트
2. 이 문서
3. `PROJECT_STATUS.md`
4. `DESIGN.md`
5. PR #1은 검토 중인 후보

## 공개 저장소 원칙

다음은 추가하지 않는다.

- 회사 내부 문서
- 실제 임상/Study 데이터
- 세부 Validation Logic
- 사내 템플릿/수식
- 비공개 고객/업무 정보

## 기술 부채

dependency는 정확한 버전으로 고정하고 `package-lock.json`을 커밋한다.
Node 버전은 `.nvmrc`(22)를 따르고, CI는 `npm ci`로 lockfile 그대로 설치한다.
버전을 올릴 때는 `npm test`와 `npm run build`를 함께 확인한다.

## 다음 작업

1. PR #1 닫기
3. WORK / STORY의 visual language 통일
4. mobile/desktop responsive UAT
5. 커스텀 도메인 연결 여부 결정 (pages.dev 공개 URL은 2026-11-03 검증 완료)
6. CONTACT 연락 수단, STORY 글, AKA·무카랭 화면 등 공개 콘텐츠 보강
