import { Link, useParams } from 'react-router-dom';
import { Chips, EntryList, ProjectGroups } from '../components/EntryList';
import { entryPath, portfolio } from '../content/portfolio';

export function PortfolioIndex({ kind }: { kind: 'work' | 'projects' }) {
  const isWork = kind === 'work';
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <Link className="back-link" to="/">← 홈으로</Link>
      <header className="page-head">
        <p className="eyebrow">{isWork ? 'Work' : 'Projects'}</p>
        <h1>{isWork ? '업무 경험' : '만들고 있는 것'}</h1>
        <p className="lead">{isWork ? 'Clinical Data를 다루며, 일하는 방식을 더 낫게 만든 경험입니다.' : '업무와 일상에서 느낀 불편을 직접 기획하고 만들어 가는 기록입니다.'}</p>
        {isWork && <p className="role-caption">Data Management Associate</p>}
      </header>
      {isWork ? <>
        <h2 className="sr-only">업무 경험 목록</h2>
        <EntryList entries={portfolio.filter(entry => entry.kind === 'work')} />
      </> : <ProjectGroups level="h2" />}
      <aside className="note">{isWork ? '공개 가능한 접근 방식과 경험을 중심으로 소개합니다. 내부 문서와 실제 업무 데이터는 포함하지 않습니다.' : '완성된 결과뿐 아니라 만드는 과정을 기록합니다. 공개 화면과 데모가 준비되면 각 프로젝트에 추가합니다.'}</aside>
    </main>
  );
}

export function PortfolioDetail({ kind }: { kind: 'work' | 'projects' }) {
  const { slug } = useParams();
  const entries = portfolio.filter(entry => entry.kind === kind);
  const entry = entries.find(item => item.slug === slug);
  if (!entry) return <NotFoundPage />;
  const siblings = entries.filter(item => item.group === entry.group);
  const other = siblings.length > 1 ? siblings[(siblings.indexOf(entry) + 1) % siblings.length] : undefined;
  const noun = kind === 'work' ? '작업' : '프로젝트';
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <Link className="back-link" to={`/${kind}`}>← {kind === 'work' ? '업무 경험' : '프로젝트'} 목록</Link>
      <header className="page-head">
        <p className="eyebrow">{entry.label}</p>
        <h1>{entry.title}</h1>
        <p className="lead">{entry.summary}</p>
        <Chips items={entry.tags} />
      </header>
      <ol className="detail-sections">
        {entry.sections.map((section, index) => (
          <li key={section.title}>
            <span className="detail-index" aria-hidden="true">0{index + 1}</span>
            <div><h2>{section.title}</h2><p>{section.body}</p></div>
          </li>
        ))}
      </ol>
      <aside className="note">{entry.note}</aside>
      {other && <Link className="next-entry" to={entryPath(other)}><span>다음 {noun}</span><strong>{other.title} →</strong></Link>}
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <header className="page-head">
        <p className="eyebrow">404</p>
        <h1>페이지를 찾을 수 없어요.</h1>
        <p className="lead">주소가 변경되었거나 아직 공개되지 않은 페이지입니다.</p>
      </header>
      <div className="actions"><Link className="button" to="/">홈으로 돌아가기 →</Link></div>
    </main>
  );
}
