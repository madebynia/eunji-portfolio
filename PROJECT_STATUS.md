# EUNJI Portfolio

## 한 줄 소개
간호·Clinical Data·Automation·Product로 이어진 커리어와 작업물을 보여주는 개인 포트폴리오 웹사이트.

## 정의
React · Vite · TypeScript · React Router 기반 개인 브랜딩 사이트. HOME · WORK · STORY를 중심으로 경력 흐름과 만든 프로젝트를 공개 가능한 정보만 사용해 정리한다.

## 업데이트
2026-11-11

## 버전
0.1.0

## 현재 상태
- main은 HOME · WORK · STORY 기본 구조와 테스트/빌드 환경, Cloudflare Pages용 SPA fallback을 가진 현재 production baseline이다.
- main 최신 CI(2026-10-02)는 성공 상태다.
- 2026-11-11: `feat/resume-portfolio`에서 개발자 이력서형(사이드바, 딥 네이비)으로 전면 개편. 업무 도구(DM Skills, DM Tool, DDF Knowledge)와 제품(AKA, 무카랭, Nia Work) 상세 페이지 추가. 테스트 15개·빌드·5개 화면 폭 브라우저 확인 통과, 배포 전.
- 이전 v2 Home 재설계는 `feat/portfolio-v2` / PR #1에 Draft로 남아 있으며, 이력서형으로 방향을 정해 정리 대상이다.
- PR #1은 현재 main과 diverged 상태이며 7커밋 앞, 6커밋 뒤다(2026-11-03 기준). 병합 전 main 최신 변경 반영과 재검토가 필요하다.
- 오래된 PROJECT_STATUS 전용 PR #2는 2026-09-29 정리 과정에서 닫았다.
- `AGENTS.md`, `DESIGN.md`, `HANDOFF.md`, `docs/product-build-system/` 추가 작업은 PR #3으로 main에 병합됐다.
- 2026-10-02 진주 여행 공개 페이지와 GitHub Pages 배포 workflow를 추가했다가 같은 날 둘 다 제거했다. 현재 main에는 남아 있지 않다.
- dependency 버전을 정확한 버전으로 고정하고 `package-lock.json`을 추가했다. Node 버전은 `.nvmrc`(22) 기준이며 CI는 `npm ci`로 설치한다.
- Cloudflare Pages production: https://eunji-portfolio.pages.dev — 2026-11-03에 main `7c06f1f` 배포 성공을 확인했다. 공개 주소가 로컬 빌드와 같은 asset 해시를 내려주고, `/`, `/work`, `/story`, 없는 경로 직접 진입이 모두 200으로 열리며, 브라우저에서 HOME·WORK·STORY 화면과 콘솔 오류 없음을 확인했다.
- 공개 저장소이므로 회사 내부 문서·실제 Study 정보·세부 Validation Logic·사내 템플릿은 포함하지 않는다.

## 다음 작업
- `feat/resume-portfolio` PR 리뷰 후 main 병합(배포). PR #1은 닫는다.
- WORK · STORY를 선택된 Home visual language와 맞춘다.
- 모바일/데스크톱 반응형과 HOME · WORK · STORY 직접 진입을 확인한다.
- 커스텀 도메인 연결 여부를 결정한다.
- CONTACT에 GitHub 외 연락 수단을 추가할지 결정한다.
- STORY 글(현재 모두 COMING SOON)과 AKA·무카랭 화면/데모를 채운다.

## 기술 부채 / 주의
- dependency는 Renovate/Dependabot 없이 수동으로 올린다. 올릴 때는 `npm test`와 `npm run build`를 함께 확인한다.
- v2 Home은 아직 제품 authority가 아니다. 병합 전에는 main의 `DESIGN.md`와 실제 main 코드가 기준이다.
- 실행하지 않은 production 검증은 완료로 기록하지 않는다.
