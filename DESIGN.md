# EUNJI Portfolio Design System

현재 `main`의 시각 언어를 기준으로 한다. Draft PR의 실험 디자인은 병합 전까지 authority가 아니다.

## 방향

개인 포트폴리오이지만 이력서처럼 딱딱하지 않고, **차분한 editorial + 가벼운 playful detail**을 유지한다.

핵심 키워드:
- warm
- clear
- editorial
- personal
- quiet playful
- professional, not corporate

## 현재 토큰

`src/styles/tokens.css`가 색상/간격/반경의 실제 구현 기준이다.

주요 톤:
- off-white background
- charcoal text
- lavender / pink 중심 포인트
- yellow / mint 보조 포인트
- soft shadow
- pill과 둥근 카드

## 레이아웃

- desktop에서 넓은 여백과 명확한 section rhythm
- mobile 최소 폭 320px 유지
- hero는 강한 한 문장 + 짧은 설명 + 행동으로 구성
- WORK는 결과물과 문제 해결 과정을 먼저 읽히게 한다
- STORY는 경력 나열보다 변화의 맥락을 설명한다

## 컴포넌트

같은 역할은 기존 컴포넌트를 우선 사용한다.

- SiteHeader / SiteFooter
- SectionLabel
- Pill
- WorkCard
- StoryCard
- Timeline

새 컴포넌트를 만들기 전에 기존 컴포넌트 확장 가능성을 확인한다.

## Motion

현재 motion은 짧은 hover/transition 정도의 절제된 수준이다.
새 motion을 추가할 때도 콘텐츠보다 앞서지 않게 한다.

- 150–250ms 범위의 짧은 feedback
- transform/opacity 우선
- 큰 parallax, 지속 animation, 과한 glow는 피한다
- reduced motion을 존중한다

## 외부 레퍼런스

필요하면 Refero / 21st.dev / Component Gallery / Kinetics / Impeccable을 참고할 수 있다.
외부 스타일을 그대로 복제하지 않고 현재 토큰과 typography에 맞게 재해석한다.
