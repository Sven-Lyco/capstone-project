import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReloadButton from './ReloadButton';

describe('ReloadButton', () => {
  it('renders a button', () => {
    render(<ReloadButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<ReloadButton onClick={handleOnClick} />);

    const button = screen.getByRole('button', { name: 'Seite neu laden' });
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
