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

    for (const [name, href] of [['Projects', '/#projects'], ['How I work', '/#principles'], ['Career', '/#career'], ['Contact', '/#contact'], ['Story', '/story']]) {
      expect(navigation.getByRole('link', { name })).toHaveAttribute('href', href);
    }
    expect(screen.getByRole('link', { name: /EUNJI/ })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: '이력서' })).toHaveAttribute('href', '/resume');
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:eunji921020@gmail.com');
    expect(screen.queryByRole('link', { name: /GitHub/ })).toBeNull();
  });
});
