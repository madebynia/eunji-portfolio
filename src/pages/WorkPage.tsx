import { Pill } from '../components/Pill';
import { SectionLabel } from '../components/SectionLabel';
import {
  automation,
  documentation,
  experience,
  products,
  skillGroups,
  standardizationItems,
  workIntro,
} from '../content/work';

export function WorkPage() {
  return (
    <main className="page-main">
      <section className="page-hero section-shell">
        <SectionLabel>WORK</SectionLabel>
        <div className="page-hero-grid">
          <div>
            <p className="role-badge">{workIntro.role}</p>
            <h1>{workIntro.title}</h1>
          </div>
          <div className="page-hero-side">
            <p>{workIntro.body}</p>
            <div className="pill-row">
              {workIntro.keywords.map((keyword) => (
                <Pill key={keyword}>{keyword}</Pill>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-shell">
        <SectionLabel>EXPERIENCE</SectionLabel>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.period}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h2>{item.title}</h2>
                <p className="experience-place">{item.place}</p>
              </div>
              <p className="experience-body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block soft-panel" id="clinical-data">
        <div className="section-shell">
          <SectionLabel>CLINICAL DATA & STANDARDIZATION</SectionLabel>
          <div className="section-heading-row">
            <h2>기준을 만들고, 다른 사람도 같은 방식으로 일할 수 있게 남깁니다.</h2>
            <p>문서를 쓰는 것보다 중요한 건 실제 업무에서 사용할 수 있는 기준을 만드는 일이라고 생각합니다.</p>
          </div>
          <div className="capability-grid">
            {standardizationItems.map((item, index) => (
              <article className="capability-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="confidential-note">회사 내부 문서, 실제 Study 정보, 세부 Logic과 템플릿은 공개하지 않습니다.</p>
        </div>
      </section>

      <section className="section-block section-shell" id="automation">
        <SectionLabel>AUTOMATION & PRODUCTIVITY</SectionLabel>
        <div className="automation-feature">
          <div className="automation-title-panel">
            <span className="mini-label">WORKFLOW</span>
            <h2>{automation.title}</h2>
            <p>{automation.body}</p>
          </div>
          <ol className="automation-notes">
            {automation.notes.map((note, index) => (
              <li key={note}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-block products-panel" id="products">
        <div className="section-shell">
          <SectionLabel>PRODUCTS & EXPERIMENTS</SectionLabel>
          <div className="section-heading-row">
            <h2>업무 밖에서도, 불편하면 직접 만들어봅니다.</h2>
            <p>완성품만 보여주기보다 왜 만들었는지와 어떤 판단을 했는지를 기록하려고 합니다.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className={`product-card product-card-${index + 1}`} key={product.title}>
                <p className="mini-label">{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <p>{product.body}</p>
                <span>{product.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-shell">
        <SectionLabel>DOCUMENTATION & COMMUNICATION</SectionLabel>
        <div className="section-heading-row">
          <h2>복잡한 걸 이해하고, 다른 사람이 이해할 수 있게 바꾸는 일.</h2>
          <p>업무 기준을 문서로 남기는 것부터 시각 자료로 전달하는 것까지 직접 해왔습니다.</p>
        </div>
        <div className="documentation-grid">
          {documentation.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block skills-panel">
        <div className="section-shell">
          <SectionLabel>SKILLS</SectionLabel>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h2>{group.title}</h2>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
