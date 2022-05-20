import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonDetailsPage from './PersonDetailsPage';

describe('PersonDetailsPage', () => {
  it('renders the Page with one link', () => {
    render(
      <MemoryRouter>
        <PersonDetailsPage />
      </MemoryRouter>
    );

    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(backLink).toBeInTheDocument();
  });
});
