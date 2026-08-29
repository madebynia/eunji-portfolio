import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { WorkPage } from './WorkPage';

describe('WorkPage', () => {
  it('shows the current role and core professional themes', () => {
    render(<WorkPage />);

    expect(screen.getByText('Data Management Associate')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'SOP Development' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'DVS Manual Development' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'DVS Logic Design' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Excel Workflow Automation' })).toBeInTheDocument();
  });
});
