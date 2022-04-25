import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddButton from './AddButton';

describe('AddButton', () => {
  it('renders a button', () => {
    const onClick = jest.fn();
    render(<AddButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: /hinzufügen/i });
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onClick = jest.fn();
    render(<AddButton onClick={onClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
