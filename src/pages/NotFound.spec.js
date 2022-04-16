import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders the Page with heading and one button', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    const backLink = screen.getByRole('button', { name: /zurück/i });

    expect(heading).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
  });
});
