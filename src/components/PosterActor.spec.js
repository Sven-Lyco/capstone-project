import { render, screen } from '@testing-library/react';
import PosterActor from './PosterActor';

describe('PosterActor', () => {
  it('renders a Poster of an Actor', () => {
    render(<PosterActor alt="Jane Doe" />);

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<PosterActor alt="Jane Doe" />);

    const poster = screen.getByAltText('Jane Doe');
    expect(poster).toHaveAttribute('alt', 'Jane Doe');
  });
});
