import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { StoryPage } from './StoryPage';

describe('StoryPage', () => {
  it('introduces the career story in natural Korean', () => {
    render(<MemoryRouter><StoryPage /></MemoryRouter>);

    expect(
      screen.getByRole('heading', {
        name: '처음부터 데이터를 다루던 사람은 아니었습니다.',
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/coming soon/i)).toBeNull();
    expect(screen.getByText(/글이 준비되는 대로/)).toBeInTheDocument();
  });
});
