import { render, screen } from '@testing-library/react';
import Poster from './Poster';

describe('Poster', () => {
  it('renders a Poster of a movie or series', () => {
    render(<Poster alt="Poster" />);

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<Poster alt="Poster" />);

    const poster = screen.getByAltText('Poster');
    expect(poster).toHaveAttribute('alt', 'Poster');
  });
});
