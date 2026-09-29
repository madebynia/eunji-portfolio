# Repository Agent Guide

이 저장소의 모든 AI 작업에 적용한다.

## 읽는 순서

1. 이 파일
2. `docs/product-build-system/PLAYBOOK.md`
3. `DESIGN.md`
4. `HANDOFF.md`
5. `PROJECT_STATUS.md`
6. 실제 코드와 테스트

## 원칙

- 현재 `main`과 실제 구현을 먼저 확인한다.
- 기존 컴포넌트, 콘텐츠 구조, 스타일 토큰을 우선 재사용한다.
- 디자인을 바꾸기 전에 `DESIGN.md`를 확인한다.
- 공개 저장소이므로 회사 내부 문서, 실제 Study 정보, 세부 Validation Logic, 사내 템플릿을 넣지 않는다.
- 큰 구조 변경은 별도 브랜치에서 한다.
- 실행하지 않은 테스트/빌드는 PASS라고 기록하지 않는다.
- 사용자 승인 없이 main 병합이나 production 배포를 하지 않는다.

UI/UX 작업은 `docs/product-build-system/UI_DESIGN.md`,
구현은 `DEVELOPMENT.md`,
완료 검증은 `QA.md`를 따른다.
