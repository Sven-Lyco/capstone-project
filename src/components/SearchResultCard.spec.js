import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchResultCard from './SearchResultCard';

const name = 'Suits';

describe('SearchResultCard', () => {
  it('renders a Poster of a movie or series', () => {
    render(
      <MemoryRouter>
        <SearchResultCard />
      </MemoryRouter>
    );

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('a poster has an alt text', () => {
    render(
      <MemoryRouter>
        <SearchResultCard name={name} />
      </MemoryRouter>
    );
    const posterListAltTexts = screen.getByAltText('Suits');
    expect(posterListAltTexts).toBeInTheDocument();
  });
});
