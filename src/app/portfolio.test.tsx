import { fireEvent, render, screen, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AppRoutes } from './routes';

afterEach(cleanup);
vi.stubGlobal('scrollTo', vi.fn());

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
    expect(screen.getByRole('heading', { name: 'Side projects.' })).toBeInTheDocument();
  });

  it('links each project to the next one in the same group', () => {
    renderRoute('/projects/nia-work');
    expect(screen.getByRole('heading', { level: 1, name: 'Nia Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /다음 프로젝트/ })).toHaveAttribute('href', '/projects/aka');
    cleanup();
    renderRoute('/projects/ddf-knowledge');
    expect(screen.getByRole('link', { name: /다음 프로젝트/ })).toHaveAttribute('href', '/projects/dm-skills');
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
    ['/work#products', 'Side projects.'],
  ])('keeps the old %s link useful', async (path, title) => {
    renderRoute(path);
    expect(await screen.findByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  });

  it.each(['/missing', '/projects/unknown', '/work/unknown'])('shows a recoverable not-found page for %s', path => {
    renderRoute(path);
    expect(screen.getByRole('heading', { name: '페이지를 찾을 수 없어요.' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: '홈으로 돌아가기 →' }));
    expect(screen.getByRole('heading', { name: 'I’m EUNJI.' })).toBeInTheDocument();
  });
});
