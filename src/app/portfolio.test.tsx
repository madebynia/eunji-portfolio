import { fireEvent, render, screen, waitFor, cleanup, within } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AppRoutes } from './routes';

afterEach(cleanup);
vi.stubGlobal('scrollTo', vi.fn());
Element.prototype.scrollIntoView = vi.fn();

function BackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>브라우저 뒤로</button>;
}

function renderRoute(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><AppRoutes /><BackButton /></MemoryRouter>);
}

describe('portfolio routes', () => {
  it('opens project details and preserves browser back navigation', async () => {
    renderRoute('/projects');
    fireEvent.click(screen.getByRole('link', { name: /AKA/ }));
    expect(screen.getByRole('heading', { level: 1, name: 'AKA' })).toBeInTheDocument();
    expect(screen.getByText(/현재 제작 중인 개인 프로젝트/)).toBeInTheDocument();
    await waitFor(() => expect(document.title).toBe('AKA | EUNJI'));
    fireEvent.click(screen.getByRole('button', { name: '브라우저 뒤로' }));
    expect(screen.getByRole('heading', { level: 1, name: '만들고 있는 것' })).toBeInTheDocument();
  });

  it('links each project to the next one in the same group', () => {
    renderRoute('/projects/nia-work');
    expect(screen.getByRole('heading', { level: 1, name: 'Nia Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /다음 프로젝트/ })).toHaveAttribute('href', '/projects/aka');
    cleanup();
    renderRoute('/projects/ddf-knowledge');
    expect(screen.getByRole('link', { name: /다음 프로젝트/ })).toHaveAttribute('href', '/projects/dm-skills');
  });

  it('groups the projects index into tools, products and other builds', () => {
    renderRoute('/projects');
    const groups = screen.getAllByRole('heading', { level: 2 }).map(h => h.textContent ?? '');
    expect(groups).toEqual(expect.arrayContaining(['업무에서 시작한 도구', '불편에서 시작한 제품', '그 밖에 만들고 있는 것']));
    const more = screen.getByText('5개 프로젝트 보기').closest('details');
    expect(more).not.toHaveAttribute('open');
    window.dispatchEvent(new Event('beforeprint'));
    expect(more).toHaveAttribute('open');
    window.dispatchEvent(new Event('afterprint'));
    expect(more).not.toHaveAttribute('open');
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(6);
    expect(screen.getByText('Momo Files').closest('ul')?.children.length).toBe(5);
  });

  it('moves keyboard focus to the section a sidebar link jumps to', async () => {
    renderRoute('/');
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' });
    fireEvent.click(within(nav).getByRole('link', { name: 'Career' }));
    await waitFor(() => expect(document.activeElement?.id).toBe('career'));
  });

  it('marks the projects nav item as current on a project page', () => {
    renderRoute('/projects/aka');
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'true');
  });

  it('opens the standalone resume without the sidebar', () => {
    renderRoute('/resume');
    expect(screen.getByRole('heading', { level: 1, name: 'EUNJI' })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Primary navigation' })).toBeNull();
    expect(screen.getByText('약 30건')).toBeInTheDocument();
    expect(screen.getByText('3시간 → 1시간')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Nia Work' })).toHaveAttribute('href', '/projects/nia-work');
    expect(screen.queryByRole('link', { name: 'AKA' })).toBeNull();
    expect(screen.getByRole('link', { name: 'eunji921020@gmail.com' })).toHaveAttribute('href', 'mailto:eunji921020@gmail.com');
    expect(screen.getByRole('button', { name: 'PDF로 저장' })).toBeInTheDocument();
  });

  it('opens a work detail directly, including confidentiality guidance', () => {
    renderRoute('/work/clinical-data');
    expect(screen.getByRole('heading', { name: 'SOP Development' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'DVS Logic Design' })).toBeInTheDocument();
    expect(screen.getByText(/실제 Study 정보/)).toBeInTheDocument();
  });

  it.each([
    ['/work#clinical-data', 'Clinical Data & Standardization'],
    ['/work#automation', 'Excel Workflow Automation'],
    ['/work#products', '만들고 있는 것'],
  ])('keeps the old %s link useful', async (path, title) => {
    renderRoute(path);
    expect(await screen.findByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  });

  it.each(['/missing', '/projects/unknown', '/work/unknown'])('shows a recoverable not-found page for %s', path => {
    renderRoute(path);
    expect(screen.getByRole('heading', { name: '페이지를 찾을 수 없어요.' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: '홈으로 돌아가기 →' }));
    expect(screen.getByRole('heading', { level: 1, name: /임상 데이터의 기준을 세우고/ })).toBeInTheDocument();
  });
});
