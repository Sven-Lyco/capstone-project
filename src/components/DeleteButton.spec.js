import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {
  it('renders a button', () => {
    const onClick = jest.fn();
    render(<DeleteButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: /entfernen/i });
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onClick = jest.fn();
    render(<DeleteButton onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
