import { Link, Route, Routes } from 'react-router-dom';

function SiteHeader() {
  return (
    <header>
      <Link to="/" aria-label="EUNJI home">EUNJI</Link>
      <nav aria-label="Primary navigation">
        <Link to="/">HOME</Link>
        <Link to="/work">WORK</Link>
        <Link to="/story">STORY</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

function Placeholder({ title }: { title: string }) {
  return <main><h1>{title}</h1></main>;
}

export function AppRoutes() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Placeholder title="HOME" />} />
        <Route path="/work" element={<Placeholder title="WORK" />} />
        <Route path="/story" element={<Placeholder title="STORY" />} />
      </Routes>
    </>
  );
}
