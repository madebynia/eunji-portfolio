import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/SectionLabel';
import {
  careerSteps,
  hero,
  recentProducts,
  smallNotes,
  workingStyle,
} from '../content/home';

export function HomePage() {
  return (
    <main className="home-v2">
      <section className="home-v2-hero section-shell" aria-labelledby="home-title">
        <div className="home-v2-hero-copy">
          <p className="home-v2-eyebrow">{hero.eyebrow}</p>
          <h1 id="home-title">{hero.title}</h1>
          <p className="home-v2-lede">{hero.body}</p>
          <div className="home-v2-actions">
            <a className="home-v2-button home-v2-button-primary" href="#recently-made">
              VIEW WHAT I MADE <span aria-hidden="true">↓</span>
            </a>
            <Link className="home-v2-text-link" to="/story">
              MY STORY <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="home-v2-scratchboard" aria-label="How Eunji approaches work">
          <span className="scratch-star scratch-star-one" aria-hidden="true">✳</span>
          <span className="scratch-star scratch-star-two" aria-hidden="true">✦</span>
          <div className="scratch-note scratch-note-problem">
            <small>WHEN I SEE</small>
            <strong>“이걸 또 해야 해?”</strong>
          </div>
          <div className="scratch-arrow" aria-hidden="true">↘</div>
          <div className="scratch-note scratch-note-answer">
            <small>I USUALLY</small>
            <strong>정리 → 규칙 → 자동화</strong>
          </div>
          <p className="scratch-caption">and sometimes… 그냥 만들어버립니다.</p>
        </div>
      </section>

      <section className="home-v2-section section-shell" id="recently-made">
        <SectionLabel>RECENTLY MADE</SectionLabel>
        <div className="home-v2-section-head">
          <h2>요즘은 설명하는 것보다<br />직접 만들어보는 쪽에 가깝습니다.</h2>
          <p>완성품만 보여주기보다 왜 만들었고, 무엇을 고치며 만들어갔는지를 남기려고 합니다.</p>
        </div>

        <div className="home-v2-products">
          {recentProducts.map((product, index) => (
            <article className={`home-v2-product home-v2-product-${index + 1}`} key={product.title}>
              <div className="home-v2-product-meta">
                <span>{product.number}</span>
                <p>{product.kicker}</p>
              </div>
              <div className="home-v2-product-body">
                <h3>{product.title}</h3>
                <p className="home-v2-product-summary">{product.summary}</p>
                <p className="home-v2-product-note">{product.note}</p>
                <Link className="home-v2-product-link" to={product.href}>
                  PROJECT NOTE <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className="home-v2-product-preview" aria-hidden="true">
                <div className="preview-topbar"><i /><i /><i /></div>
                <div className="preview-screen">
                  <span>{product.title}</span>
                  <b>{index === 0 ? 'make it simpler.' : 'tiny idea, real screen.'}</b>
                  <div className="preview-lines"><i /><i /><i /></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-v2-section home-v2-how">
        <div className="section-shell">
          <SectionLabel>HOW I WORK</SectionLabel>
          <div className="home-v2-section-head home-v2-section-head-light">
            <h2>문제가 보이면 보통<br />이런 순서로 움직입니다.</h2>
            <p>도구를 먼저 고르기보다 사람이 왜 불편한지, 어디서 판단이 달라지는지부터 봅니다.</p>
          </div>

          <div className="home-v2-methods">
            {workingStyle.map((item, index) => (
              <article className="home-v2-method" key={item.problem}>
                <span className="home-v2-method-index">0{index + 1}</span>
                <p className="home-v2-method-problem">{item.problem}</p>
                <span className="home-v2-method-arrow" aria-hidden="true">→</span>
                <h3>{item.action}</h3>
                <p className="home-v2-method-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-v2-section section-shell home-v2-career">
        <SectionLabel>FROM CARE TO BUILD</SectionLabel>
        <div className="home-v2-section-head">
          <h2>하던 일은 바뀌었지만,<br />관심은 계속 이어졌습니다.</h2>
          <p>환자와 치료를 이해하는 일에서 시작해 데이터, 기준, 자동화와 제품으로 영역을 넓혀왔습니다.</p>
        </div>

        <ol className="home-v2-career-list" aria-label="Career path">
          {careerSteps.map((step) => (
            <li key={`${step.year}-${step.title}`}>
              <span>{step.year}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <Link className="home-v2-text-link home-v2-career-link" to="/story">
          커리어 이야기 더 보기 <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="home-v2-note-strip" aria-label="Areas Eunji works in">
        <div className="home-v2-note-track">
          {smallNotes.map((note) => <span key={note}>{note}</span>)}
        </div>
      </section>

      <section className="home-v2-closing" id="contact">
        <div className="section-shell home-v2-closing-inner">
          <div>
            <SectionLabel>STILL BUILDING</SectionLabel>
            <h2>배운 건 정리하고,<br />불편한 건 만들어봅니다.</h2>
          </div>
          <div className="home-v2-closing-side">
            <p>Clinical Data에서 시작한 관심을 자동화와 작은 제품으로 계속 넓혀가고 있습니다.</p>
            <div className="home-v2-closing-links">
              <Link to="/work">WORK ↗</Link>
              <Link to="/story">STORY ↗</Link>
              <a href="https://github.com/madebynia" target="_blank" rel="noreferrer">GITHUB ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
