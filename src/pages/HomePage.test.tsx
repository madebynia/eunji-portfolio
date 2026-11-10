import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

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
      screen.getByRole('heading', {
        name: 'I’m EUNJI.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '이어져 온 경험.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Clinical Data & Standardization/ })).toHaveAttribute('href', '/work/clinical-data');
    expect(screen.getByRole('link', { name: /AKA/ })).toHaveAttribute('href', '/projects/aka');
    expect(screen.getByRole('link', { name: /무카랭/ })).toHaveAttribute('href', '/projects/mukalang');
    expect(screen.getByRole('link', { name: /Nia Work/ })).toHaveAttribute('href', '/projects/nia-work');
  });

  it('shows the work-born tools, side builds and working principles', () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: '업무에서 시작한 도구.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /DM Skills/ })).toHaveAttribute('href', '/projects/dm-skills');
    expect(screen.getByRole('link', { name: /DM Tool/ })).toHaveAttribute('href', '/projects/dm-tool');
    expect(screen.getByRole('link', { name: /DDF Knowledge/ })).toHaveAttribute('href', '/projects/ddf-knowledge');
    expect(screen.getByText('Momo Files')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '확인한 것만 완료라고 씁니다' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /3D 캐릭터/ })).toHaveAttribute('src', '/images/eunji-avatar-720.webp');
  });
});
