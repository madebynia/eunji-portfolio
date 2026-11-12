export const experience = [
  {
    period: '2016 — 2017',
    title: 'Oncology Care',
    place: '원자력병원 · 암 외과병동',
    body: '항암제 투여 환자와 중증 환자 간호, 수술 전후 간호를 맡았습니다. 이때 익힌 항암제 스케줄·독성·부작용 패턴에 대한 감각이 지금의 데이터 클리닝과 쿼리 판단의 바탕이 됐습니다.',
  },
  {
    period: '2019 — 2025',
    title: 'Oncology Clinical Research & Data',
    place: '국립암센터 · 임상시험센터',
    body: '연구자 주도 임상(IIT)을 중심으로 프로토콜 리뷰, eCRF 설계·DB 구축, 데이터 클리닝, DB Lock까지 DM 전 과정을 수행했습니다. Oncology 분야 임상연구 약 30건(항암제·의료기기·아스피린 연구 등)의 데이터 검증 Logic QC를 담당했고, SOP·DVS Manual·DVS Logic 개발로 업무를 표준화했습니다. 스폰서·CRA·PI·CRC와 협업하며 연구 행정·계약과 채용 업무도 함께 맡았습니다.',
  },
  {
    period: '2026 — NOW',
    title: 'Clinical Data & Systems',
    place: '제이앤피메디 · Data Management Associate',
    body: '임상시험 DM 업무 전반을 맡아 쿼리 발행까지 직접 수행하고 있습니다. 최근에는 의료기기 연구자 주도 임상(IIT)의 셋업과 Validation을 담당했고, 글로벌 제약사 시판 후 조사(PMS)의 셋업을 앞두고 있습니다.',
  },
];

export const standardizationItems = [
  {
    title: 'Workflow Standardization',
    body: '사람마다 다르게 처리하던 업무에서 공통 기준을 찾아 정리하고, 반복해서 사용할 수 있는 흐름으로 만들었습니다.',
  },
  {
    title: 'SOP Development',
    body: '실제 업무에서 같은 기준으로 일할 수 있도록 SOP를 직접 개발하고 정리했습니다.',
  },
  {
    title: 'DVS Manual Development',
    body: 'DVS 작성과 운영에 필요한 기준을 Manual 형태로 직접 개발했습니다.',
  },
  {
    title: 'DVS Logic Design',
    body: '데이터 검증 기준을 실제 검증에 사용할 수 있는 Logic으로 구체화했고, Oncology 분야 임상연구 약 30건(항암제·의료기기·아스피린 연구 등, 대부분 연구자 주도 임상)의 Logic QC를 담당했습니다.',
  },
];

export const automation = {
  title: 'Excel Workflow Automation',
  body: '반복되는 문서 작성과 일정 관리 업무를 Excel 수식과 템플릿으로 바꿔, 주 3시간 걸리던 작업을 1시간으로 줄였습니다.',
  notes: [
    '반복 입력과 확인 작업을 가능한 만큼 수식과 규칙으로 줄이기',
    '중간 수정이 잦은 문서에서 다시 손대야 하는 범위를 줄이기',
    '사람이 최종 확인해야 하는 지점을 더 분명하게 만들기',
  ],
};

export const skillGroups = [
  {
    title: 'Clinical',
    items: ['Oncology', 'Protocol Review', 'eCRF 설계 · DB 구축', 'Data Cleaning · DB Lock', 'DVS Logic QC', 'Query Management', 'Study Setup · Validation', 'PMS', 'IIT', 'CDISC 표준 (학습 중)'],
  },
  {
    title: 'EDC',
    items: ['myTrial', 'CRScube', 'Maven'],
  },
  {
    title: 'Workflow',
    items: ['Workflow Standardization', 'SOP / Manual', 'QC', 'Rule Design', 'Process Improvement'],
  },
  {
    title: 'Build',
    items: ['SAS', 'Excel Automation', 'AI-assisted Development', 'React · TypeScript', 'Tauri · Rust'],
  },
];
