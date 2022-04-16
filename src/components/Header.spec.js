import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders a Header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  it('has one nav link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('has a title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getByText('Watcha');
    expect(title).toBeInTheDocument();
  });
});
