import { Link } from 'react-router-dom';
import { chapters, storyIdeas, storyIntro } from '../content/story';

export function StoryPage() {
  return (
    <main id="main-content" className="page" tabIndex={-1}>
      <Link className="back-link" to="/">← 홈으로</Link>
      <header className="page-head">
        <p className="eyebrow">Story</p>
        <h1>{storyIntro.title}</h1>
        <p className="lead">{storyIntro.body}</p>
      </header>

      <ol className="row-list story-chapters" aria-label="커리어 이야기">
        {chapters.map(chapter => (
          <li key={chapter.number}>
            <p className="period">{chapter.number} · {chapter.label}</p>
            <div>
              <h2 className="row-title">{chapter.title}</h2>
              {chapter.paragraphs.map(paragraph => <p className="row-body" key={paragraph}>{paragraph}</p>)}
            </div>
          </li>
        ))}
      </ol>

      <section className="section story-notes" aria-labelledby="notes-heading">
        <p className="eyebrow">Notes</p>
        <h2 id="notes-heading">이 이야기는 아직 쓰는 중입니다.</h2>
        <p className="contact-text">Threads에서 짧게 꺼낸 이야기 중 조금 더 남겨두고 싶은 것들을 이곳에 정리할 예정입니다.</p>
        <ul className="note-cards">
          {storyIdeas.map(story => (
            <li key={story.title}>
              <span className="note-tag">{story.tag}</span>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <span className="note-status">Coming soon</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
