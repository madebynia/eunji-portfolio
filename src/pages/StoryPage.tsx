import { Link } from 'react-router-dom';
import { chapters, storyIntro } from '../content/story';

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

      <p className="note">더 긴 이야기는 글이 준비되는 대로 이곳에 하나씩 올리겠습니다.</p>
    </main>
  );
}
