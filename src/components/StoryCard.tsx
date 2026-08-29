type StoryCardProps = {
  tag: string;
  title: string;
  description: string;
};

export function StoryCard({ tag, title, description }: StoryCardProps) {
  return (
    <article className="story-card">
      <span className="mini-label">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="story-card-status">COMING SOON</span>
    </article>
  );
}
