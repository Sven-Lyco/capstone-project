import InnerNavigation from './InnerNavigation';
import { render, screen } from '@testing-library/react';

describe('Navigation', () => {
  it('renders two buttons', () => {
    render(<InnerNavigation />);

    const navigationButtons = screen.getAllByRole('button');
    expect(navigationButtons).toHaveLength(2);
  });
});
