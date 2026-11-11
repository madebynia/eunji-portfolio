import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(cleanup);
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('presents the resume with separate work and project destinations', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /임상 데이터의 기준을 세우고/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '경력' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Clinical Data & Standardization/ })).toHaveAttribute('href', '/work/clinical-data');
    expect(screen.getByRole('link', { name: /AKA/ })).toHaveAttribute('href', '/projects/aka');
    expect(screen.getByRole('link', { name: /무카랭/ })).toHaveAttribute('href', '/projects/mukalang');
    expect(screen.getByRole('link', { name: /Nia Work/ })).toHaveAttribute('href', '/projects/nia-work');
  });

  it('shows the work-born tools, side builds and working principles', () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: '업무에서 시작한 도구' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /DM Skills/ })).toHaveAttribute('href', '/projects/dm-skills');
    expect(screen.getByRole('link', { name: /DM Tool/ })).toHaveAttribute('href', '/projects/dm-tool');
    expect(screen.getByRole('link', { name: /DDF Knowledge/ })).toHaveAttribute('href', '/projects/ddf-knowledge');
    expect(screen.getByText('Momo Files')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '확인한 것만 완료라고 씁니다' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: '불편에서 시작한 제품' })).toBeInTheDocument();
    expect(screen.getByText('약 30건')).toBeInTheDocument();
    expect(screen.getByText('3시간 → 1시간')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '이메일 보내기' })).toHaveAttribute('href', 'mailto:eunji921020@gmail.com');
    expect(screen.getByRole('button', { name: '주소 복사' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 4 }).length).toBe(6);
  });
});

describe('contact email copy', () => {
  afterEach(() => vi.restoreAllMocks());
  const renderHome = () => render(<MemoryRouter><HomePage /></MemoryRouter>);

  it('copies with the async clipboard and confirms', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    renderHome();
    fireEvent.click(screen.getByRole('button', { name: '주소 복사' }));
    expect(await screen.findByRole('status')).toHaveTextContent('복사했어요');
    expect(writeText).toHaveBeenCalledWith('eunji921020@gmail.com');
  });

  it('falls back to a selection copy when the clipboard is blocked', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockRejectedValue(new Error('blocked')) }, configurable: true });
    const exec = vi.fn().mockReturnValue(true);
    Object.defineProperty(document, 'execCommand', { value: exec, configurable: true });
    renderHome();
    fireEvent.click(screen.getByRole('button', { name: '주소 복사' }));
    expect(await screen.findByText('복사했어요')).toBeInTheDocument();
    expect(exec).toHaveBeenCalledWith('copy');
    expect(document.querySelector('textarea')).toBeNull();
  });

  it('tells the visitor when both copy methods fail', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockRejectedValue(new Error('blocked')) }, configurable: true });
    Object.defineProperty(document, 'execCommand', { value: vi.fn(() => { throw new Error('no'); }), configurable: true });
    renderHome();
    fireEvent.click(screen.getByRole('button', { name: '주소 복사' }));
    expect(await screen.findByText(/복사하지 못했어요/)).toBeInTheDocument();
    expect(document.querySelector('textarea')).toBeNull();
  });
});
