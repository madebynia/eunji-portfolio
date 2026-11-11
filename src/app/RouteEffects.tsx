import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const first = useRef(true);
  const positions = useRef(new Map<string, number>());

  useEffect(() => {
    const initial = first.current;
    first.current = false;
    const title = document.querySelector('main h1')?.textContent;
    document.title = location.pathname === '/' ? 'Eunji Lee — Clinical Data Management' : title ? `${title} | Eunji Lee` : 'Eunji Lee';
    const frame = requestAnimationFrame(() => {
      const main = document.querySelector<HTMLElement>('main');
      if (main) { main.id = 'main-content'; main.tabIndex = -1; }
      if (!initial) main?.focus({ preventScroll: true });
      let hash = '';
      try { hash = decodeURIComponent(location.hash.slice(1)); } catch { /* Invalid hashes use the page top. */ }
      const target = hash ? document.getElementById(hash) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'instant' });
        // Move keyboard focus with the jump so the next Tab continues from the section.
        if (!initial) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
      else if (!initial) window.scrollTo({ top: navigationType === 'POP' ? positions.current.get(location.key) ?? 0 : 0, behavior: 'instant' });
    });
    // Record while this location is active, before another page changes its height.
    const record = () => positions.current.set(location.key, window.scrollY);
    window.addEventListener('scroll', record, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', record); };
  }, [location.key, location.pathname, location.hash, navigationType]);
  return null;
}
