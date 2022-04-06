import MovieDetailsPage from './SeriesDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders the Page one link', () => {
    render(
      <MemoryRouter>
        <MovieDetailsPage />
      </MemoryRouter>
    );

    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(backLink).toBeInTheDocument();
  });
});
