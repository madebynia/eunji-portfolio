import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'WORK', to: '/work' },
  { label: 'STORY', to: '/story' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink className="brand-mark" to="/" aria-label="EUNJI home">
          EUNJI<span className="brand-dot">.</span>
        </NavLink>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
              end={item.to === '/'}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-link" href="/#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
