import { SectionLabel } from '../components/SectionLabel';
import { StoryCard } from '../components/StoryCard';
import { chapters, storyIdeas, storyIntro } from '../content/story';

export function StoryPage() {
  return (
    <main className="page-main story-page">
      <section className="page-hero story-hero section-shell">
        <SectionLabel>STORY</SectionLabel>
        <div className="story-hero-copy">
          <h1>{storyIntro.title}</h1>
          <p>{storyIntro.body}</p>
        </div>
      </section>

      <section className="story-chapters section-shell" aria-label="Career story">
        {chapters.map((chapter) => (
          <article className="story-chapter" key={chapter.number}>
            <div className="story-chapter-meta">
              <span>{chapter.number}</span>
              <p>{chapter.label}</p>
            </div>
            <div className="story-chapter-content">
              <h2>{chapter.title}</h2>
              <div className="body-stack body-large">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-block story-notes-panel">
        <div className="section-shell">
          <SectionLabel>NOTES</SectionLabel>
          <div className="section-heading-row">
            <h2>이 이야기는 아직 쓰는 중입니다.</h2>
            <p>Threads에서 짧게 꺼낸 이야기 중 조금 더 남겨두고 싶은 것들을 이곳에 정리할 예정입니다.</p>
          </div>
          <div className="story-card-grid">
            {storyIdeas.map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
