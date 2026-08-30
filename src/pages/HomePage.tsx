import { Link } from 'react-router-dom';
import { EntryList } from '../components/EntryList';
import { portfolio } from '../content/portfolio';
import { experience, skillGroups } from '../content/work';

export function HomePage() {
  return (
    <main id="main-content" className="resume-sheet" tabIndex={-1}>
      <header className="resume-intro">
        <div className="intro-topline"><span>HELLO, NICE TO MEET YOU</span><span>CLINICAL DATA & BEYOND</span></div>
        <div className="intro-grid">
          <div className="intro-copy">
            <p className="resume-label">CLINICAL DATA · AUTOMATION · PRODUCT</p>
            <h1>I’m EUNJI<span>.</span></h1>
            <p className="intro-lead">복잡한 일은 정리하고,<br />반복되는 일은 줄입니다.</p>
            <p className="intro-description">간호에서 임상 데이터로, 데이터에서 자동화와 제품으로.<br className="desktop-break" /> 필요한 기준을 정리하고, 필요한 도구를 직접 만듭니다.</p>
            <Link className="text-link" to="/story">조금 더 긴 제 이야기 <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="profile-mark" aria-label="은지의 타이포그래피 프로필">
            <span className="profile-caption">A LITTLE ABOUT ME</span>
            <div className="profile-monogram" aria-hidden="true">e<span>:</span></div>
            <span className="profile-footnote">Still learning. Still building.</span>
          </div>
        </div>
        <div className="intro-bottomline"><span>현재 <strong>Data Management Associate</strong></span><a href="https://github.com/madebynia" target="_blank" rel="noreferrer">GITHUB ↗<span className="sr-only"> 새 탭</span></a></div>
      </header>
      <section className="resume-section" aria-labelledby="experience-heading">
        <div className="resume-section-title"><p className="resume-label">01 / EXPERIENCE</p><h2 id="experience-heading">이어져 온 경험.</h2><p>하던 일은 달라졌지만, 관심은 계속 이어졌습니다.</p></div>
        <ol className="resume-timeline">{experience.map(item => <li key={item.period}>
          <p className="career-date">{item.period}</p><div className="career-dot" aria-hidden="true" />
          <h3>{item.title}</h3><p className="career-place">{item.place}</p><p>{item.body}</p>
        </li>)}</ol>
      </section>
      <section className="resume-section strengths-section" aria-labelledby="skills-heading">
        <div className="resume-section-title"><p className="resume-label">02 / WHAT I BRING</p><h2 id="skills-heading">이런 일을 합니다.</h2><p>경험을 기준으로, 기준을 도구로.</p></div>
        <div className="resume-skills">{skillGroups.map((group, index) => <article key={group.title}>
          <span className="skill-symbol" aria-hidden="true">{['◎', '≡', '</>'][index]}</span>
          <h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        </article>)}</div>
      </section>
      <section className="resume-section" aria-labelledby="work-heading">
        <div className="resume-section-title"><p className="resume-label">03 / SELECTED WORK</p><h2 id="work-heading">일하는 방식을 바꾸는 일.</h2><Link className="text-link" to="/work">WORK 전체 보기 ↗</Link></div>
        <EntryList entries={portfolio.filter(entry => entry.kind === 'work')} />
      </section>
      <section className="resume-section" aria-labelledby="projects-heading">
        <div className="resume-section-title"><p className="resume-label">04 / PERSONAL PROJECTS</p><h2 id="projects-heading">불편에서 시작한 작은 제품.</h2><Link className="text-link" to="/projects">PROJECTS 전체 보기 ↗</Link></div>
        <EntryList entries={portfolio.filter(entry => entry.kind === 'projects')} />
      </section>
      <section className="resume-contact" id="contact" aria-labelledby="contact-heading">
        <p className="resume-label">TO BE CONTINUED</p><h2 id="contact-heading">아직 배우고, 계속 만듭니다.</h2>
        <p>배운 것과 만든 것, 그 사이의 시행착오를 기록합니다.</p>
        <div><Link className="text-link" to="/story">STORY ↗</Link><a className="text-link" href="https://github.com/madebynia" target="_blank" rel="noreferrer">GITHUB ↗<span className="sr-only"> 새 탭</span></a></div>
      </section>
    </main>
  );
}
