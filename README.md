# EUNJI Portfolio

개인 브랜딩과 포트폴리오를 위한 웹사이트입니다.

- **HOME** — 어떤 사람인지
- **WORK** — 해온 일과 만든 것들
- **STORY** — 간호에서 Clinical Data, Automation, Product로 이어진 기록

## Stack

- React
- Vite
- TypeScript
- React Router
- Vitest + Testing Library

## Local development

```bash
npm install
npm run dev
```

테스트와 프로덕션 빌드 확인:

```bash
npm test
npm run build
```

## Cloudflare Pages

GitHub 저장소를 Cloudflare Pages에 연결한 뒤 아래 값으로 배포합니다.

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22

`public/_redirects`에 SPA fallback을 두어 `/work`, `/story`를 직접 열어도 `index.html`로 라우팅되도록 구성했습니다.

## Public content policy

이 저장소는 공개를 전제로 합니다. 회사 내부 문서, 실제 Study 정보, 데이터, 세부 Validation Logic, Excel 수식, 사내 템플릿 등 비공개 정보는 포함하지 않습니다.
