import { Link } from 'react-router-dom';
import { Pill } from '../components/Pill';
import { SectionLabel } from '../components/SectionLabel';
import { Timeline } from '../components/Timeline';
import { WorkCard } from '../components/WorkCard';
import {
  about,
  curiosities,
  hero,
  pathItems,
  selectedWork,
  whatIDoItems,
} from '../content/home';

export function HomePage() {
  return (
    <main>
      <section className="hero section-shell" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="hero-name">{hero.eyebrow}</p>
          <h1 id="home-title">{hero.title}</h1>
          <div className="hero-body">
            {hero.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="hero-keywords" aria-label="Areas of interest">
            {hero.keywords.map((keyword) => (
              <Pill key={keyword}>{keyword}</Pill>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" to="/story">
              MY STORY
            </Link>
            <Link className="button button-ghost" to="/work">
              VIEW MY WORK
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="A playful illustration of work becoming organized">
          <div className="doodle-orbit doodle-orbit-one" aria-hidden="true" />
          <div className="doodle-orbit doodle-orbit-two" aria-hidden="true" />
          <div className="doodle-card doodle-card-one" aria-hidden="true">
            <span>DATA</span>
            <i />
            <i />
            <i />
          </div>
          <div className="doodle-card doodle-card-two" aria-hidden="true">
            <span>LOGIC</span>
            <b>→</b>
          </div>
          <div className="doodle-person" aria-hidden="true">
            <div className="doodle-head">
              <span className="doodle-hair" />
              <span className="doodle-face-dot doodle-face-dot-left" />
              <span className="doodle-face-dot doodle-face-dot-right" />
              <span className="doodle-smile" />
            </div>
            <div className="doodle-body">
              <div className="doodle-laptop">
                <span>✦</span>
              </div>
            </div>
          </div>
          <span className="doodle-spark doodle-spark-one" aria-hidden="true">✦</span>
          <span className="doodle-spark doodle-spark-two" aria-hidden="true">✦</span>
        </div>
      </section>

      <section className="section-block section-shell about-block">
        <SectionLabel>ABOUT</SectionLabel>
        <div className="split-heading">
          <h2>{about.title}</h2>
          <div className="body-stack body-large">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block path-block">
        <div className="section-shell">
          <SectionLabel>MY PATH</SectionLabel>
          <div className="section-heading-row">
            <h2>하던 일은 달라졌지만, 관심은 계속 이어졌습니다.</h2>
            <p>환자와 치료를 이해하는 일에서 시작해 데이터, 기준, 로직, 자동화와 제품으로 영역을 넓혀왔습니다.</p>
          </div>
          <Timeline items={pathItems} />
        </div>
      </section>

      <section className="section-block section-shell">
        <SectionLabel>WHAT I DO</SectionLabel>
        <div className="section-heading-row">
          <h2>귀찮은 일을 그냥 익숙해지려고 하진 않습니다.</h2>
          <p>일을 하다 반복되는 패턴이 보이면, 기준을 정리하고 다른 방법으로 바꿀 수 있는지 먼저 생각합니다.</p>
        </div>
        <div className="method-grid">
          {whatIDoItems.map((item) => (
            <article className="method-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="quiet-note">복잡한 내용을 이해하기 쉽게 정리하고 전달하는 일도 좋아합니다.</p>
      </section>

      <section className="section-block selected-work-block">
        <div className="section-shell">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <div className="section-heading-row">
            <h2>해온 일과, 요즘 만들고 있는 것들.</h2>
            <p>회사 내부 정보는 공개하지 않고, 문제를 어떻게 정리하고 풀었는지를 중심으로 소개합니다.</p>
          </div>
          <div className="work-grid">
            {selectedWork.map((work) => (
              <WorkCard key={work.title} {...work} />
            ))}
          </div>
          <div className="section-link-row">
            <Link className="text-link" to="/work">WORK 전체 보기 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-block section-shell curiosity-block">
        <SectionLabel>STORY</SectionLabel>
        <div className="curiosity-layout">
          <div>
            <h2>요즘은 이런 걸 궁금해합니다.</h2>
            <p className="body-large">배운 것과 만들고 있는 것, 가끔은 삽질한 것도 기록합니다.</p>
            <Link className="button button-ghost" to="/story">READ MY STORY</Link>
          </div>
          <div className="curiosity-cloud">
            {curiosities.map((topic, index) => (
              <span className={`curiosity-tag curiosity-tag-${(index % 4) + 1}`} key={topic}>{topic}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-band" id="contact">
        <div className="section-shell closing-band-inner">
          <SectionLabel>CONTACT</SectionLabel>
          <h2>Still learning. Still building.</h2>
          <p>간호에서 데이터로, 데이터에서 자동화와 제품으로. 아직 만드는 중입니다.</p>
          <div className="closing-links">
            <Link to="/work">WORK</Link>
            <Link to="/story">STORY</Link>
            <a href="https://github.com/madebynia" target="_blank" rel="noreferrer">GITHUB ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}
