import { automation, standardizationItems } from './work';

export type PortfolioEntry = {
  slug: string;
  kind: 'work' | 'projects';
  group?: 'tools' | 'products';
  number: string;
  title: string;
  label: string;
  summary: string;
  tags: string[];
  sections: { title: string; body: string }[];
  note: string;
};

export const portfolio: PortfolioEntry[] = [
  {
    slug: 'clinical-data', kind: 'work', number: '01',
    title: 'Clinical Data & Standardization', label: 'CLINICAL DATA / SYSTEMS',
    summary: '흩어진 업무 기준을 정리하고, 함께 사용할 수 있는 문서와 검증 로직으로 만듭니다.',
    tags: ['Clinical Data', 'SOP / Manual', 'DVS Logic'],
    sections: standardizationItems.map(item => ({ title: item.title, body: item.body })),
    note: '회사 내부 문서, 실제 Study 정보, 세부 검증 Logic과 사내 템플릿은 공개하지 않습니다.',
  },
  {
    slug: 'automation', kind: 'work', number: '02', title: automation.title,
    label: 'EXCEL / WORKFLOW', summary: automation.body,
    tags: ['Excel', 'Automation', 'Workflow Design'],
    sections: automation.notes.map((body, index) => ({
      title: ['반복 입력 줄이기', '수정에 유연한 흐름', '확인 지점 명확히 하기'][index], body,
    })),
    note: '업무에서 접근한 방식만 소개합니다. 실제 업무 데이터, 수식과 사내 템플릿은 공개하지 않습니다.',
  },
  {
    slug: 'dm-skills', kind: 'projects', group: 'tools', number: '01',
    title: 'DM Skills', label: 'DM WORK / AI SKILLS',
    summary: 'DM 업무에서 자주 하는 판단과 글쓰기를 AI가 일정한 기준으로 돕도록 업무 스킬로 정리했습니다.',
    tags: ['Clinical DM', 'CDASH · SDTM', 'AI Skills'],
    sections: [
      { title: '무엇을 담았나', body: 'CRF 변수 코드 추천(CDASH·SDTM 우선), DM 문서 검토, Query Message 작성, EDC 변경 절차 점검, UAT 스크립트와 결과 정리, 주간 보고처럼 실제로 자주 하는 일을 스킬 단위로 나눴습니다.' },
      { title: '공개 표준을 기준으로', body: 'CDISC 같은 공개 표준과 일반적인 DM 절차를 기준으로 삼았습니다. AI는 초안을 만들고, 최종 확인과 판단은 사람이 합니다.' },
    ],
    note: '실제 과제 정보와 사내 문서는 이 페이지에 공개하지 않습니다.',
  },
  {
    slug: 'dm-tool', kind: 'projects', group: 'tools', number: '02',
    title: 'DM Tool', label: 'DM WORK / DESKTOP TOOL',
    summary: 'DVS 점검, DB Spec 대조, Excel 비교, 문서 익명화처럼 DM 업무에서 손으로 확인하던 일을 모은 데스크톱 도구입니다.',
    tags: ['Tauri', 'Rust', 'Anonymization'],
    sections: [
      { title: '규칙으로 찾을 수 있는 건 먼저 찾기', body: 'DVS와 DB Spec 사이의 차이처럼 규칙으로 확인할 수 있는 것은 도구가 먼저 찾아 표로 보여줍니다. 문서 수정은 사람이 직접 합니다.' },
      { title: '가리고 되돌리는 익명화', body: '과제명, 약물명, 사람 이름 같은 값을 자동으로 가렸다가 결과를 받은 뒤 원래 값으로 되돌리는 익명화 기능을 Rust로 만들었습니다. 기능 검증은 가상 문서로 합니다.' },
      { title: '지금은 Nia Work 안으로', body: 'DM Tool의 화면과 기능은 Nia Work의 “DM 도구”로 옮겨, 앞으로는 한곳에서 관리합니다.' },
    ],
    note: '현재 제작 중인 개인 프로젝트입니다. 화면 시연과 기능 검증은 가상 문서로 합니다.',
  },
  {
    slug: 'ddf-knowledge', kind: 'projects', group: 'tools', number: '03',
    title: 'DDF Knowledge', label: 'STANDARDS / LEARNING',
    summary: 'CDISC 표준, Digital Data Flow(DDF), USDM, ICH M11 관련 레포와 자료를 한곳에서 찾을 수 있게 만든 개인 색인입니다.',
    tags: ['CDISC', 'DDF · USDM', 'ICH M11'],
    sections: [
      { title: '공부하면서 만든 지도', body: '외부 레포는 복사하지 않고 용도, 라이선스, 확인한 커밋만 목록으로 관리하다가 필요할 때 내려받습니다.' },
      { title: '출처를 남기는 습관', body: '보관하는 파일마다 원본 주소, 체크섬, 받은 날짜를 함께 기록합니다.' },
    ],
    note: '개인 학습용 색인이라 레포는 비공개로 둡니다.',
  },
  {
    slug: 'aka', kind: 'projects', group: 'products', number: '01',
    title: 'AKA', label: 'PERSONAL PRODUCT / ANDROID',
    summary: '흩어진 일정과 기록을 모아, 휴대폰 안의 AI가 삶의 영역별 트리로 정리해 주는 개인 기록 앱입니다.',
    tags: ['React Native · Expo', 'On-device AI', 'Android'],
    sections: [
      { title: '기록에서 흐름으로', body: '하루의 기록을 주제와 흐름으로 묶고, 삶의 다섯 영역으로 나눈 트리로 보여줍니다.' },
      { title: '휴대폰 안에서 도는 AI', body: '작은 언어 모델을 기기에서 직접 돌리고, 모델이 약한 부분은 한국어 규칙 기반 파서로 보완했습니다.' },
      { title: '일상에 붙는 기능', body: '공휴일에 맞춰 옮겨지는 업무 루틴, 일정 동기화, Android 홈 화면 위젯을 만들었습니다.' },
    ],
    note: '현재 제작 중인 개인 프로젝트입니다. 공개 가능한 화면과 상세 제작 기록을 준비하고 있습니다.',
  },
  {
    slug: 'mukalang', kind: 'projects', group: 'products', number: '02',
    title: '무카랭', label: 'PERSONAL PRODUCT / LANGUAGE LEARNING',
    summary: '매일 영어 패턴 두 개와 구동사·표현 하나를 익히는 언어 학습 앱입니다. 유료 AI API 없이 기기 안의 AI만 씁니다.',
    tags: ['React Native · Expo', 'On-device AI', 'Language Learning'],
    sections: [
      { title: '단계별 패턴 노트', body: '일상에서 쓰는 영어 패턴을 단계별로 쌓을 수 있게 패턴 노트를 만들고 있고, 일본어 문법 노트와 내 카드도 함께 둡니다.' },
      { title: '주제가 있는 연습', body: '홈에서 주간 테마에 맞춘 오늘의 추천 연습을 보여줍니다.' },
      { title: '무료로, 기기 안에서', body: '유료 AI API를 쓰지 않고, 학습용 AI는 기기 안에서 돌아가도록 만들고 있습니다.' },
    ],
    note: '현재 제작 중인 개인 프로젝트입니다. 공개 가능한 화면과 상세 제작 기록을 준비하고 있습니다.',
  },
  {
    slug: 'nia-work', kind: 'projects', group: 'products', number: '03',
    title: 'Nia Work', label: 'PERSONAL PRODUCT / AI TEAM DESKTOP',
    summary: '여러 AI가 역할을 나눠 일정, 문서, DM 업무를 돕는 Windows 데스크톱 앱입니다.',
    tags: ['Tauri', 'Rust', 'TypeScript', 'Multi-agent'],
    sections: [
      { title: '역할이 있는 AI 팀', body: '일정·메일, 시스템 설정, Data Validation, 문서 담당 AI가 한 방에서 일하고, 요청 내용에 맞는 담당이 먼저 답합니다.' },
      { title: '익명화한 뒤에만 AI로', body: 'AI에 요청하기 전에 과제명, 약물명, 사람 이름 같은 값을 자동으로 가리고, 답을 받은 뒤 원래 값으로 복원합니다. 어떤 값을 가릴지는 과제마다 직접 확인합니다.' },
      { title: '승인과 독립 QC', body: 'GitHub 이슈에서 시작하는 개발 작업이 사용자 승인, 작업, 빌드와 테스트, 독립 QC 순서로 진행되도록 설계했습니다.' },
    ],
    note: '현재 제작 중인 개인 프로젝트입니다. 업무에 쓸 때는 회사가 승인한 범위 안에서 익명화한 뒤 사용하며, 화면 시연과 기능 검증은 가상 데이터로 합니다.',
  },
];

export const alsoBuilding = [
  { title: 'Sticky Memo', body: '작은 캐릭터가 있는 Windows 데스크톱 메모 앱', tags: 'Tauri 2' },
  { title: 'Momo Files', body: '작업 공간 중심의 Windows 파일 탐색기', tags: 'Rust · Tauri 2' },
  { title: 'AI Studio', body: '콘텐츠 제작 과정을 한 화면에 모으는 데스크톱 작업실 (프로토타입)', tags: 'Tauri · Rust' },
  { title: 'Personal AI Agents', body: '자료를 모으는 Knowledge Lab과 공모전을 찾는 Contest Hunter, 두 개의 로컬 우선 에이전트 (MVP)', tags: 'Python' },
  { title: 'AI TOP 100 2026 카카오 봇', body: '대회 예선용 카카오 채널 에이전트. Cloud Run에 배포하고 실제 카카오 채널에서 테스트했습니다.', tags: 'Python · Cloud Run' },
];

export const workPrinciples = [
  { title: '확인한 것만 완료라고 씁니다', body: '테스트, 실제 화면 확인, 아직 확인하지 못한 항목을 나눠 기록합니다. 실행해 보지 않은 것은 “미검증”으로 남깁니다.' },
  { title: '만든 쪽과 검토하는 쪽을 나눕니다', body: '개인 프로젝트의 개발 작업은 별도의 리뷰어가 독립적으로 QC하도록 하고, 지적된 내용을 고친 뒤에 마무리합니다.' },
  { title: '공개할 것과 지킬 것을 먼저 정합니다', body: '공개 자료에는 실제 과제 정보와 사내 문서를 넣지 않고, 도구의 시연과 검증은 가상 데이터로 합니다.' },
];

export const entryPath = (entry: PortfolioEntry) => `/${entry.kind}/${entry.slug}`;
