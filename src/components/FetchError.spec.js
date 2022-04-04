import FetchError from './FetchError';
import { render, screen } from '@testing-library/react';

describe('FetchError', () => {
  it('renders the Page with heading and a button', () => {
    render(<FetchError />);

    const heading = screen.getByRole('heading', { level: 1 });
    const backLink = screen.getByRole('button', { name: /seite neu laden/i });

    expect(heading).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
  });
});
