import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('uses Korean-first hero copy with English structural labels', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: '복잡한 일은 정리하고, 반복되는 일은 줄입니다.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('MY PATH')).toBeInTheDocument();
    expect(screen.getByText('WHAT I DO')).toBeInTheDocument();
    expect(screen.getByText('SELECTED WORK')).toBeInTheDocument();
  });
});
