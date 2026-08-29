import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StoryPage } from './StoryPage';

describe('StoryPage', () => {
  it('introduces the career story in natural Korean', () => {
    render(<StoryPage />);

    expect(
      screen.getByRole('heading', {
        name: '처음부터 데이터를 다루던 사람은 아니었습니다.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('병동 간호사에서 Clinical DM이 되기까지')).toBeInTheDocument();
    expect(screen.getByText('반복 작업이 너무 귀찮아서 자동화를 시작한 이야기')).toBeInTheDocument();
  });
});
