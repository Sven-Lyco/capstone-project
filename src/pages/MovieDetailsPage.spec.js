import MovieDetailsPage from './SeriesDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('MovieDetailsPage', () => {
  const checkIsOnWatchlist = jest.fn();
  it('renders the Page one link', () => {
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
