import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders a Header', () => {
    render(<Header alt="Header" />);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  it('has an alt text', () => {
    render(<Header alt="Header" />);

    const header = screen.getByAltText('Header');
    expect(header).toHaveAttribute('alt', 'Header');
  });
});
