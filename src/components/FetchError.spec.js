import { render, screen } from '@testing-library/react';
import FetchError from './FetchError';

describe('FetchError', () => {
  it('renders the Page with heading and a button', () => {
    render(<FetchError />);

    const heading = screen.getByRole('heading', { level: 1 });
    const backLink = screen.getByRole('button', { name: /seite neu laden/i });

    expect(heading).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
  });
});
