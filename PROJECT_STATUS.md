# EUNJI Portfolio

**Updated:** 2026-09-22  
**Main baseline:** `main@a01b3555`  
**Active current line:** `feat/portfolio-v2@5bfbe8df` · PR #1  
**Release state:** main 유지 · v2 Home review 대기

## 한 줄 소개
간호·Clinical Data·Automation·Product로 이어진 커리어와 작업물을 보여주는 개인 포트폴리오 웹사이트.

## 정의
React · Vite · TypeScript · React Router 기반 개인 브랜딩 사이트. HOME · WORK · STORY를 중심으로 경력 흐름과 만든 프로젝트를 공개 가능한 정보만 사용해 정리한다.

## 시작일
2026-08-29

## 버전
0.1.0

## 진행률
85%

## 현재 상태
- main에는 HOME · WORK · STORY 기본 구조, 테스트/빌드 환경, Cloudflare Pages용 SPA fallback이 구성돼 있다.
- PR #1 `feat/portfolio-v2`는 main보다 6커밋 앞선 Draft PR이며 mergeable 상태는 clean이다.
- v2 Home은 최근 제품/만든 것들을 앞에 두고, 문제 해결 방식과 경력 서사를 더 선명하게 보여 주는 editorial 방향으로 재구성돼 있다.
- v2 head `5bfbe8df` 기준 CI는 성공했다.
- 2026-09-06 이후 v2 코드 변경은 없으며, 현재 단계는 구현 추가보다 리뷰/정리 단계다.
- 공개 저장소이므로 회사 내부 문서·실제 Study 정보·세부 Validation Logic 등 비공개 정보는 포함하지 않는 정책을 유지한다.

## 다음 작업
- v2 Home을 최종 리뷰하고 사용자 승인 후 main 반영 여부를 결정한다.
- WORK · STORY를 v2 Home의 시각 언어와 맞춰 전체 톤을 통일한다.
- 모바일/데스크톱 반응형과 HOME/WORK/STORY 직접 진입을 확인한다.
- Cloudflare Pages production 연결과 실제 공개 URL을 최종 검증한다.

## 주의/미검증
- v2는 아직 main에 병합되지 않았다.
- v2 CI 성공은 확인됐지만 Cloudflare Pages production 배포/공개 URL은 별도 검증 대상이다.
- 공개 저장소에는 회사 내부 정보·실제 임상/Study 데이터·사내 템플릿을 추가하지 않는다.
