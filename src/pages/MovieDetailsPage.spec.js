import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetailsPage from './SeriesDetailsPage';

describe('MovieDetailsPage', () => {
  const checkIsOnWatchlist = jest.fn();
  it('renders the Page with one link', () => {
    render(
      <MemoryRouter>
        <MovieDetailsPage
          checkIsOnWatchlist={checkIsOnWatchlist.mockReturnValueOnce(true)}
        />
      </MemoryRouter>
    );

    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(backLink).toBeInTheDocument();
  });
});
