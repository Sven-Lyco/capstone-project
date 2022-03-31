import SeriesDetailsPage from './SeriesDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders the Page with header, headings and one link', () => {
    render(
      <MemoryRouter>
        <SeriesDetailsPage />
      </MemoryRouter>
    );

    const header = screen.getByRole('banner');
    const heading = screen.getAllByRole('heading', { level: 1 });
    const backLink = screen.getByRole('link', { name: /zurück/i });

    expect(header).toBeInTheDocument();
    expect(heading).toHaveLength(1);
    expect(backLink).toBeInTheDocument();
  });
});
