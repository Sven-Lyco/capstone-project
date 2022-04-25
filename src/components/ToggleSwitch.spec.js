import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders a checkbox as a toggle switch', () => {
    render(<ToggleSwitch />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('has onChange function', () => {
    const handleOnChange = jest.fn();
    render(<ToggleSwitch onChange={handleOnChange} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(handleOnChange).toHaveBeenCalled();
  });
});
