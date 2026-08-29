import { render, screen, within } from '@testing-library/react';
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

    const navigation = within(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    );

    expect(navigation.getByRole('link', { name: 'HOME' })).toBeInTheDocument();
    expect(navigation.getByRole('link', { name: 'WORK' })).toBeInTheDocument();
    expect(navigation.getByRole('link', { name: 'STORY' })).toBeInTheDocument();
    expect(navigation.getByRole('link', { name: 'CONTACT' })).toBeInTheDocument();
  });
});
