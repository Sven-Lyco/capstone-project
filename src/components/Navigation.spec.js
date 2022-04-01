import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders a Navigation with two links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');
    const seriesLink = screen.getByRole('link', { name: /serien/i });
    const movieLink = screen.getByRole('link', { name: /filme/i });
    const searchLink = screen.getByRole('link', { name: /suche/i });

    expect(navigation).toBeInTheDocument();
    expect(seriesLink).toBeInTheDocument();
    expect(movieLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });
});
