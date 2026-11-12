import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectGroups } from '../components/EntryList';
import { workPrinciples } from '../content/portfolio';
import { profile } from '../content/profile';
import { experience } from '../content/work';

type CopyState = 'idle' | 'copied' | 'failed';

function copyWithSelection(text: string) {
  const active = document.activeElement as HTMLElement | null;
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.top = '0';
  area.style.left = '-9999px';
  document.body.appendChild(area);
  try {
    area.select();
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    area.remove();
    active?.focus({ preventScroll: true });
  }
}

function ContactEmail() {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      ok = true;
    } catch {
      // Some browsers block the async clipboard; fall back to a selected text copy.
      ok = copyWithSelection(profile.email);
    }
    setState(ok ? 'copied' : 'failed');
    window.clearTimeout(timer.current);
    if (ok) timer.current = window.setTimeout(() => setState('idle'), 2000);
  };

  return (
    <div className="contact-email">
      <p className="contact-address">{profile.email}</p>
      <div className="actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>이메일 보내기</a>
        <button className="button" type="button" onClick={copy}>주소 복사</button>
        <span className="copy-status" role="status">
          {state === 'copied' ? '복사했어요' : state === 'failed' ? '복사하지 못했어요. 주소를 직접 선택해 주세요.' : ''}
        </span>
      </div>
    </div>
  );
}

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
          <Link className="button" to="/resume">이력서 보기</Link>
          <Link className="button" to="/story">커리어 이야기</Link>
        </div>
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

      <section id="career" className="section" aria-labelledby="career-heading">
        <p className="eyebrow">Career</p>
        <h2 id="career-heading">경력</h2>
        <ol className="row-list">
          {[...experience].reverse().map(item => (
            <li key={item.period}>
              <p className="period">{item.period}</p>
              <div>
                <h3 className="row-title">{item.title}</h3>
                <p className="row-meta">{item.place}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="actions">
          <Link className="button button-primary" to="/resume">이력서 보기</Link>
          <Link className="button" to="/work">업무 경험 자세히</Link>
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">연락</h2>
        <p className="contact-text">협업이나 채용 관련 문의는 이메일로 연락해 주세요.</p>
        <ContactEmail />
      </section>
    </main>
  );
}
