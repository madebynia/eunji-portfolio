import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('opens with a more personal problem-solving statement', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /귀찮은 일을 발견하면.*그냥 두지 않는 사람입니다\./,
      }),
    ).toBeInTheDocument();
  });

  it('puts recent products before the career narrative', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText('RECENTLY MADE')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AKA' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '무카랭' })).toBeInTheDocument();
    expect(screen.getByText('HOW I WORK')).toBeInTheDocument();
    expect(screen.getByText('FROM CARE TO BUILD')).toBeInTheDocument();
  });
});
