import { render, screen } from '@testing-library/react';
import ProviderPoster from './ProviderPoster';

describe('ProviderPoster', () => {
  it('renders a Poster of a Provider', () => {
    render(<ProviderPoster alt="ProviderPoster" />);

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<ProviderPoster alt="ProviderPoster" />);

    const poster = screen.getByAltText('ProviderPoster');
    expect(poster).toHaveAttribute('alt', 'ProviderPoster');
  });
});
