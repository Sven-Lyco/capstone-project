import InnerNavigation from './InnerNavigation';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('InnerNavigation', () => {
  it('renders two buttons', () => {
    render(<InnerNavigation />);

    const navigationButtons = screen.getAllByRole('button');
    expect(navigationButtons).toHaveLength(2);
  });

  it('each button has onClick function', () => {
    const handleNavigation = jest.fn();
    render(<InnerNavigation handleNavigation={handleNavigation} />);

    const detailsButton = screen.getByRole('button', { name: /details/i });
    userEvent.click(detailsButton);
    expect(handleNavigation).toHaveBeenCalled();

    const seasonsButton = screen.getByRole('button', { name: /staffeln/i });
    userEvent.click(seasonsButton);
    expect(handleNavigation).toHaveBeenCalled();
  });
});
