import SeriesDetailsPage from './SeriesDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders the Page with one link', () => {
    render(
      <MemoryRouter>
        <SeriesDetailsPage />
      </MemoryRouter>
    );

    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(backLink).toBeInTheDocument();
  });
});
