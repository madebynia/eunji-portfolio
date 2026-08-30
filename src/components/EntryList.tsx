import { Link } from 'react-router-dom';
import { entryPath, type PortfolioEntry } from '../content/portfolio';

export function EntryList({ entries }: { entries: PortfolioEntry[] }) {
  return (
    <div className="entry-list">
      {entries.map(entry => (
        <Link className="entry-link" to={entryPath(entry)} key={entry.slug}>
          <span className="entry-number" aria-hidden="true">{entry.number}</span>
          <div className="entry-copy">
            <p className="resume-label">{entry.label}</p>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
            <div className="resume-tags">{entry.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
          <span className="entry-arrow" aria-hidden="true">↗</span>
          <span className="sr-only">상세 보기</span>
        </Link>
      ))}
    </div>
  );
}
