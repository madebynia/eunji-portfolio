import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../content/profile';

export const homeSections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'principles', label: 'How I work' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState(homeSections[0].id);
  useEffect(() => {
    if (!enabled) return;
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = homeSections[0].id;
      for (const { id } of homeSections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // The last section may be too short to reach the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = homeSections[homeSections.length - 1].id;
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [enabled]);
  return active;
}

export function Sidebar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const scrolled = useActiveSection(isHome);
  const active = isHome ? scrolled
    : pathname.startsWith('/projects') ? 'projects'
    : pathname.startsWith('/work') ? 'work'
    : pathname.startsWith('/story') ? 'story' : '';

  // On small screens the nav is a sideways-scrolling row: keep the current item in view.
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('.nav-link.is-active');
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    const left = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [active]);

  const navItems = [...homeSections.map(s => ({ key: s.id, label: s.label, to: `/#${s.id}` })), { key: 'story', label: 'Story', to: '/story' }];

  return (
    <header className="sidebar">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <div className="sidebar-inner">
        <Link to="/" className="identity">
          <img className="avatar" src="/images/eunji-avatar-720.webp" alt="" width="64" height="64" />
          <span>
            <span className="identity-name">{profile.name}</span>
            <span className="identity-role">{profile.role}</span>
          </span>
        </Link>
        <p className="sidebar-lead">{profile.sidebarLead}</p>
        <nav className="sidebar-nav" aria-label="Primary navigation" ref={navRef}>
          <ul>
            {navItems.map(item => (
              <li key={item.key}>
                <Link
                  className={active === item.key ? 'nav-link is-active' : 'nav-link'}
                  aria-current={active === item.key ? (isHome ? 'location' : 'true') : undefined}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="sidebar-links">
          <li><a href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with React, TypeScript and Vite.</p>
    </footer>
  );
}
