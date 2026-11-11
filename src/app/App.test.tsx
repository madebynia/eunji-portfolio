import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

describe('portfolio navigation', () => {
  it('renders the sidebar identity and section navigation', () => {
    render(
      <MemoryRouter>
        <AppRoutes />
      </MemoryRouter>,
    );

    const navigation = within(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    );

    for (const [name, href] of [['Experience', '/#experience'], ['Work', '/#work'], ['Projects', '/#projects'], ['Contact', '/#contact'], ['Story', '/story']]) {
      expect(navigation.getByRole('link', { name })).toHaveAttribute('href', href);
    }
    expect(screen.getByRole('link', { name: /Eunji Lee/ })).toHaveAttribute('href', '/');
  });
});
