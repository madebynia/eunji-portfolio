import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { WorkPage } from './WorkPage';
import { MemoryRouter } from 'react-router-dom';

describe('WorkPage', () => {
  it('shows the current role and core professional themes', () => {
    render(<MemoryRouter><WorkPage /></MemoryRouter>);

    expect(screen.getAllByText('Data Management Associate').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /Clinical Data & Standardization/ })).toHaveAttribute('href', '/work/clinical-data');
    expect(screen.getByRole('heading', { name: 'Excel Workflow Automation' })).toBeInTheDocument();
  });
});
