import { Link } from 'react-router-dom';
import { Pill } from './Pill';

type WorkCardProps = {
  index?: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  accent?: 'lavender' | 'pink' | 'yellow' | 'mint';
};

export function WorkCard({
  index,
  title,
  description,
  tags = [],
  href,
  accent = 'lavender',
}: WorkCardProps) {
  const content = (
    <>
      <div className="work-card-topline">
        {index ? <span className="work-card-index">{index}</span> : <span />}
        {href ? <span className="work-card-arrow" aria-hidden="true">↗</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 ? (
        <div className="pill-row" aria-label={`${title} keywords`}>
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link className={`work-card work-card-${accent}`} to={href}>
        {content}
      </Link>
    );
  }

  return <article className={`work-card work-card-${accent}`}>{content}</article>;
}
