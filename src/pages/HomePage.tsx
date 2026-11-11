import { Link } from 'react-router-dom';
import { Chips, EntryList, ProjectGroups } from '../components/EntryList';
import { portfolio, workPrinciples } from '../content/portfolio';
import { profile } from '../content/profile';
import { experience, skillGroups } from '../content/work';

export function HomePage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <section id="about" className="section" aria-labelledby="about-heading">
        <p className="eyebrow">About</p>
        <h1 id="about-heading">{profile.headline[0]}<br />{profile.headline[1]}</h1>
        <div className="prose">{profile.intro.map(text => <p key={text}>{text}</p>)}</div>
        <dl className="facts">
          {profile.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
        <div className="actions">
          <Link className="button button-primary" to="/#projects">프로젝트 보기</Link>
          <Link className="button" to="/story">커리어 이야기</Link>
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-heading">경력</h2>
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

      <section id="skills" className="section" aria-labelledby="skills-heading">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-heading">역량</h2>
        <dl className="row-list skill-rows">
          {skillGroups.map(group => <div key={group.title}><dt>{group.title}</dt><dd><Chips items={group.items} /></dd></div>)}
        </dl>
      </section>

      <section id="work" className="section" aria-labelledby="work-heading">
        <p className="eyebrow">Work</p>
        <h2 id="work-heading">업무 경험</h2>
        <EntryList entries={portfolio.filter(entry => entry.kind === 'work')} />
      </section>

      <section id="projects" className="section" aria-labelledby="projects-heading">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-heading">만들고 있는 것</h2>
        <ProjectGroups level="h3" />
      </section>

      <section id="principles" className="section" aria-labelledby="principles-heading">
        <p className="eyebrow">How I work</p>
        <h2 id="principles-heading">일하는 방식</h2>
        <ol className="principle-list">
          {workPrinciples.map((item, index) => (
            <li key={item.title}>
              <span className="principle-index" aria-hidden="true">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">연락</h2>
        <p className="contact-text">만든 도구와 과정이 궁금하시면 GitHub에서 확인하실 수 있습니다.</p>
        <div className="actions">
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗<span className="sr-only"> (새 탭)</span></a>
        </div>
      </section>
    </main>
  );
}
