import { Link, useParams } from 'react-router-dom';
import { EntryList } from '../components/EntryList';
import { alsoBuilding, entryPath, portfolio } from '../content/portfolio';

export function PortfolioIndex({ kind }: { kind: 'work' | 'projects' }) {
  const isWork = kind === 'work';
  return (
    <main id="main-content" className="resume-sheet collection-page" tabIndex={-1}>
      <Link className="back-link" to="/">← 이력서로 돌아가기</Link>
      <header className="collection-heading">
        <p className="resume-label">{isWork ? 'EXPERIENCE INTO PRACTICE' : 'IDEAS INTO PRODUCTS'}</p>
        <h1>{isWork ? 'Selected work.' : 'Side projects.'}</h1>
        <p>{isWork ? 'Clinical Data를 다루며, 일하는 방식을 더 낫게 만든 경험.' : '업무와 일상에서 느낀 불편을 직접 기획하고 만들어가는 기록.'}</p>
        {isWork && <span className="role-caption">Data Management Associate</span>}
      </header>
      {isWork ? <>
        <h2 className="sr-only">업무 경험 목록</h2>
        <EntryList entries={portfolio.filter(entry => entry.kind === kind)} />
      </> : <>
        <h2 className="group-heading">업무에서 시작한 도구</h2>
        <EntryList entries={portfolio.filter(entry => entry.group === 'tools')} />
        <h2 className="group-heading">불편에서 시작한 제품</h2>
        <EntryList entries={portfolio.filter(entry => entry.group === 'products')} />
        <h2 className="group-heading">그 밖에 만들고 있는 것</h2>
        <ul className="also-list">{alsoBuilding.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.body}</span><em>{item.tags}</em></li>)}</ul>
      </>}
      <aside className="editorial-note">{isWork ? '공개 가능한 접근 방식과 경험을 중심으로 소개합니다. 내부 문서와 실제 업무 데이터는 포함하지 않습니다.' : '완성된 결과뿐 아니라 만드는 과정을 기록합니다. 공개 화면과 데모가 준비되면 각 프로젝트에 추가합니다.'}</aside>
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
  return (
    <main id="main-content" className="resume-sheet detail-page" tabIndex={-1}>
      <Link className="back-link" to={`/${kind}`}>← {kind === 'work' ? 'WORK' : 'PROJECTS'} 목록으로</Link>
      <header className="collection-heading">
        <p className="resume-label">{entry.label}</p>
        <h1>{entry.title}</h1>
        <p>{entry.summary}</p>
        <div className="resume-tags">{entry.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </header>
      <div className="detail-sections">
        {entry.sections.map((section, index) => (
          <section className="detail-section" key={section.title}>
            <span className="entry-number" aria-hidden="true">0{index + 1}</span>
            <h2>{section.title}</h2><p>{section.body}</p>
          </section>
        ))}
      </div>
      <aside className="editorial-note">{entry.note}</aside>
      {other && <Link className="next-entry" to={entryPath(other)}>다음 {kind === 'work' ? '작업' : '프로젝트'}<strong>{other.title} →</strong></Link>}
    </main>
  );
}

export function NotFoundPage() {
  return <main id="main-content" className="resume-sheet collection-page" tabIndex={-1}>
    <header className="collection-heading"><p className="resume-label">404 / NOT FOUND</p>
      <h1>페이지를 찾을 수 없어요.</h1><p>주소가 변경되었거나 아직 공개되지 않은 페이지입니다.</p>
      <Link className="text-link" to="/">홈으로 돌아가기 →</Link>
    </header>
  </main>;
}
