# EUNJI Portfolio

## 한 줄 소개
간호·Clinical Data·Automation·Product로 이어진 커리어와 작업물을 보여주는 개인 포트폴리오 웹사이트.

## 정의
React · Vite · TypeScript · React Router 기반 개인 브랜딩 사이트. HOME · WORK · STORY를 중심으로 경력 흐름과 만든 프로젝트를 공개 가능한 정보만 사용해 정리한다.

## 업데이트
2026-09-29

## 버전
0.1.0

## 현재 상태
- main은 HOME · WORK · STORY 기본 구조와 테스트/빌드 환경, Cloudflare Pages용 SPA fallback을 가진 현재 production baseline이다.
- main 최신 CI는 성공 상태다.
- v2 Home 재설계는 `feat/portfolio-v2` / PR #1에 Draft로 남아 있다.
- PR #1은 현재 main과 diverged 상태이며 6커밋 앞, 2커밋 뒤다. 병합 전 main 최신 변경 반영과 재검토가 필요하다.
- 오래된 PROJECT_STATUS 전용 PR #2는 2026-09-29 정리 과정에서 닫았다.
- repository 작업 기준으로 `AGENTS.md`, `DESIGN.md`, `HANDOFF.md`, `docs/product-build-system/`을 추가하는 cleanup 작업을 별도 브랜치에서 진행 중이다.
- 공개 저장소이므로 회사 내부 문서·실제 Study 정보·세부 Validation Logic·사내 템플릿은 포함하지 않는다.

## 다음 작업
- PR #1을 최신 main 기준으로 refresh하고 v2 Home을 최종 리뷰한다.
- WORK · STORY를 선택된 Home visual language와 맞춘다.
- 모바일/데스크톱 반응형과 HOME · WORK · STORY 직접 진입을 확인한다.
- Cloudflare Pages production 연결과 실제 공개 URL을 검증한다.
- dependency 버전을 고정하고 lockfile을 도입해 설치 재현성을 높인다.

## 기술 부채 / 주의
- 현재 여러 dependency가 `latest`를 사용하고 package lockfile이 없다. 실제 dependency tree를 생성·검증할 수 있는 환경에서 pinning + lockfile 작업을 해야 한다.
- v2 Home은 아직 제품 authority가 아니다. 병합 전에는 main의 `DESIGN.md`와 실제 main 코드가 기준이다.
- 실행하지 않은 production 검증은 완료로 기록하지 않는다.
