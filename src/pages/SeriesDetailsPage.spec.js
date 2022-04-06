import SeriesDetailsPage from './SeriesDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('SeriesDetailsPage', () => {
  const checkIsOnWatchlist = jest.fn();
  it('renders the Page with one link', () => {
    render(
      <MemoryRouter>
        <SeriesDetailsPage
          checkIsOnWatchlist={checkIsOnWatchlist.mockReturnValueOnce(true)}
        />
      </MemoryRouter>
    );

    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(backLink).toBeInTheDocument();
  });
});
