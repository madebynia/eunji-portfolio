type TimelineItem = {
  kicker: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="timeline" aria-label="Career path">
      {items.map((item) => (
        <li className="timeline-item" key={item.title}>
          <div className="timeline-marker" aria-hidden="true" />
          <span className="timeline-kicker">{item.kicker}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
