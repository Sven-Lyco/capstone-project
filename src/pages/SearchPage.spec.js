import SearchPage from './SearchPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

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
