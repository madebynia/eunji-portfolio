import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

describe('portfolio navigation', () => {
  it('renders the shared English navigation labels', () => {
    render(
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'HOME' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'WORK' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'STORY' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'CONTACT' })).toBeInTheDocument();
  });
});
