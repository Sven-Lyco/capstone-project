import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a Navigation with five links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');
    const navigationLinks = screen.getAllByRole('link');

    expect(navigation).toBeInTheDocument();
    expect(navigationLinks).toHaveLength(5);
  });
});
