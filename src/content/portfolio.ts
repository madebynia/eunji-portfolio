import { automation, products, standardizationItems } from './work';

export type PortfolioEntry = {
  slug: string;
  kind: 'work' | 'projects';
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
  ...products.map((product, index): PortfolioEntry => ({
    slug: index === 0 ? 'aka' : 'mukalang', kind: 'projects', number: `0${index + 1}`,
    title: product.title, label: 'PERSONAL PROJECT / IN PROGRESS', summary: product.body,
    tags: ['Product', 'AI-assisted Development', 'Personal Project'],
    sections: [
      { title: '프로젝트 소개', body: product.body },
      { title: '제작 기록', body: product.note },
    ],
    note: '현재 제작 중인 개인 프로젝트입니다. 공개 가능한 화면과 상세 제작 기록을 준비하고 있습니다.',
  })),
];

export const entryPath = (entry: PortfolioEntry) => `/${entry.kind}/${entry.slug}`;
