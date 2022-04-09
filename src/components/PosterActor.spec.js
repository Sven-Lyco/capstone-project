import { render, screen } from '@testing-library/react';
import PosterActor from './PosterActor';

describe('PosterActor', () => {
  it('renders a Poster of an Actor', () => {
    render(<PosterActor alt="Poster" />);

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<PosterActor alt="Poster" />);

    const poster = screen.getByAltText('Poster');
    expect(poster).toHaveAttribute('alt', 'Poster');
  });
});
