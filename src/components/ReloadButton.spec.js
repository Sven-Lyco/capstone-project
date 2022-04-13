import ReloadButton from './ReloadButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('renders a button', () => {
    render(<ReloadButton>Reload</ReloadButton>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<ReloadButton onClick={handleOnClick}>Reload</ReloadButton>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
