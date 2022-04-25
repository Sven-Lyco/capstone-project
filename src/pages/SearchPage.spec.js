import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('renders an input', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox', { name: 'Suche' });
    expect(input).toBeInTheDocument();
  });
});
