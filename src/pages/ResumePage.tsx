import { Link } from 'react-router-dom';
import { entryPath, portfolio } from '../content/portfolio';
import { profile } from '../content/profile';
import { experience, skillGroups } from '../content/work';

const resumeProjects = ['dm-skills', 'dm-tool', 'ddf-knowledge', 'nia-work'];

export function ResumePage() {
  const work = portfolio.filter(entry => entry.kind === 'work');
  const projects = portfolio.filter(entry => resumeProjects.includes(entry.slug));

  return (
    <div className="resume-layout">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <div className="resume-toolbar">
        <Link className="back-link" to="/">← EUNJI 홈</Link>
        <button className="button" type="button" onClick={() => window.print()}>PDF로 저장</button>
      </div>
      <main id="main-content" className="resume" tabIndex={-1}>
        <header className="resume-head">
          <div>
            <h1>{profile.name}</h1>
            <p className="resume-role">{profile.role}</p>
          </div>
          <div>
            <a className="resume-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="resume-print-url">eunji-portfolio.pages.dev/resume</p>
          </div>
        </header>

        <p className="resume-summary">{profile.intro.join(' ')}</p>

        <dl className="stats resume-stats">
          {profile.stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
        </dl>

        <section className="resume-block" aria-labelledby="resume-experience">
          <h2 id="resume-experience">경력</h2>
          <ol className="row-list">
            {[...experience].reverse().map(item => (
              <li key={item.period}>
                <p className="period">{item.period}</p>
                <div>
                  <h3 className="row-title">{item.title}</h3>
                  <p className="row-meta">{item.place}</p>
                  <p className="row-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="resume-block" aria-labelledby="resume-skills">
          <h2 id="resume-skills">역량</h2>
          <dl className="row-list skill-rows">
            {skillGroups.map(group => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd><ul className="chips">{group.items.map(item => <li className="chip" key={item}>{item}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-block" aria-labelledby="resume-work">
          <h2 id="resume-work">업무 경험</h2>
          <ul className="resume-items">
            {work.map(entry => (
              <li key={entry.slug}>
                <h3><Link to={entryPath(entry)}>{entry.title}</Link></h3>
                <p>{entry.summary}</p>
                <ul className="resume-bullets">{entry.sections.map(section => <li key={section.title}>{section.title}</li>)}</ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-block" aria-labelledby="resume-projects">
          <h2 id="resume-projects">업무 도구와 대표 프로젝트</h2>
          <ul className="resume-items">
            {projects.map(entry => (
              <li key={entry.slug}>
                <h3><Link to={entryPath(entry)}>{entry.title}</Link> <span className="resume-tags">{entry.tags.join(' · ')}</span></h3>
                <p>{entry.summary}</p>
              </li>
            ))}
          </ul>
          <p className="resume-more">그 밖의 개인 프로젝트와 제작 과정은 <Link to="/#projects">EUNJI 홈</Link>에 있습니다.</p>
        </section>

        <section className="resume-block" aria-labelledby="resume-education">
          <h2 id="resume-education">학력 · 자격</h2>
          <ul className="resume-creds">
            {[...profile.education, ...profile.credentials].map(item => (
              <li key={item.title}>
                <span className="period">{item.period}</span>
                <h3>{item.title}</h3>
                <span className="resume-cred-meta">{item.meta}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
