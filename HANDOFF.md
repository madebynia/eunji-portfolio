# EUNJI Portfolio — Current Handoff

**Updated:** 2026-09-29  
**Repository:** `madebynia/eunji-portfolio`  
**Production branch:** `main`

## 현재 제품

HOME · WORK · STORY 세 축으로 개인 경력과 작업을 보여주는 React/Vite 포트폴리오다.

현재 main은:
- 기본 3-page 구조
- React Router
- Vitest + Testing Library
- Cloudflare Pages SPA fallback
- 현재 pastel/editorial visual system

을 포함한다.

## 현재 작업선

`feat/portfolio-v2` / PR #1은 Home redesign 후보이며 아직 Draft다.
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

현재 package manifest가 여러 dependency를 `latest`로 사용하고 lockfile이 없다.
재현 가능한 설치를 위해 dependency pinning + lockfile 도입이 필요하지만, 실제 dependency tree를 검증할 수 있는 환경에서 별도 작업한다.

## 다음 작업

1. PR #1을 main 기준으로 refresh
2. v2 Home 최종 리뷰
3. WORK / STORY의 visual language 통일
4. mobile/desktop responsive UAT
5. Cloudflare production 연결/URL 검증
6. dependency pinning + lockfile 도입
