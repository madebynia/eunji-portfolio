import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
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
  });
});
