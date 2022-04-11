import { render, screen } from '@testing-library/react';
import ProviderPoster from './ProviderPoster';

describe('ProviderPoster', () => {
  it('renders a Poster of a Provider', () => {
    render(<ProviderPoster alt="Netflix" />);

    const poster = screen.getByRole('img');
    expect(poster).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<ProviderPoster alt="Netflix" />);

    const poster = screen.getByAltText('Netflix');
    expect(poster).toHaveAttribute('alt', 'Netflix');
  });
});
