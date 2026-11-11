import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { alsoBuilding, entryPath, portfolio, type PortfolioEntry } from '../content/portfolio';

type Level = 'h2' | 'h3' | 'h4';

export function Chips({ items }: { items: string[] }) {
  return <ul className="chips" aria-label="키워드">{items.map(item => <li className="chip" key={item}>{item}</li>)}</ul>;
}

export function EntryList({ entries, level = 'h3' }: { entries: PortfolioEntry[]; level?: Level }) {
  const Title = level;
  return (
    <ul className="entry-list">
      {entries.map(entry => {
        const id = `entry-${entry.slug}`;
        return (
          <li key={entry.slug}>
            <Link className="entry" to={entryPath(entry)} aria-labelledby={id} aria-describedby={`${id}-summary`}>
              <div className="entry-head">
                <Title className="entry-title" id={id}>{entry.title}</Title>
                <span className="entry-arrow" aria-hidden="true">→</span>
              </div>
              <p className="entry-label">{entry.label}</p>
              <p className="entry-summary" id={`${id}-summary`}>{entry.summary}</p>
              <Chips items={entry.tags} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function AlsoList() {
  return (
    <ul className="also-list">
      {alsoBuilding.map(item => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <span className="also-body">{item.body}</span>
          <span className="also-tags">{item.tags}</span>
        </li>
      ))}
    </ul>
  );
}

const groups = [
  { key: 'tools', title: '업무에서 시작한 도구', caption: 'DM 업무를 하며 눈에 띈 반복 작업을 개인 프로젝트로 도구화해 봅니다.' },
  { key: 'products', title: '불편에서 시작한 제품', caption: '직접 쓰려고 기획하고 만드는 앱입니다.' },
] as const;

export function ProjectGroups({ level }: { level: 'h2' | 'h3' }) {
  // Collapsed side builds should still appear when the page is printed or saved as PDF.
  useEffect(() => {
    const opened: HTMLDetailsElement[] = [];
    const before = () => document.querySelectorAll<HTMLDetailsElement>('details.also-more:not([open])').forEach(d => { d.open = true; opened.push(d); });
    const after = () => { opened.splice(0).forEach(d => { d.open = false; }); };
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => { window.removeEventListener('beforeprint', before); window.removeEventListener('afterprint', after); };
  }, []);
  const Group = level;
  const item: Level = level === 'h2' ? 'h3' : 'h4';
  return (
    <div className="project-groups">
      {groups.map(group => (
        <div className="project-group" key={group.key}>
          <Group className="group-title">{group.title}</Group>
          <p className="group-caption">{group.caption}</p>
          <EntryList entries={portfolio.filter(entry => entry.group === group.key)} level={item} />
        </div>
      ))}
      <div className="project-group">
        <Group className="group-title">그 밖에 만들고 있는 것</Group>
        <details className="also-more">
          <summary>{alsoBuilding.length}개 프로젝트 보기</summary>
          <AlsoList />
        </details>
      </div>
    </div>
  );
}
