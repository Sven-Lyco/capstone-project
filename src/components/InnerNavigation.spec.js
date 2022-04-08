import InnerNavigation from './InnerNavigation';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('InnerNavigation', () => {
  it('renders two buttons', () => {
    render(<InnerNavigation />);

    const navigationButtons = screen.getAllByRole('button');
    expect(navigationButtons).toHaveLength(2);
  });

  it('has onClick function', () => {
    const handleNavigation = jest.fn();
    render(<InnerNavigation handleNavigation={handleNavigation} />);

    const navigationButton = screen.getByRole('button', { name: /details/i });
    userEvent.click(navigationButton);
    expect(handleNavigation).toHaveBeenCalled();
  });
});
