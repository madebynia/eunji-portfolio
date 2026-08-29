type PillProps = {
  children: string;
};

export function Pill({ children }: PillProps) {
  return <span className="pill">{children}</span>;
}
