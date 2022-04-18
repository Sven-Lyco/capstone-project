import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonBack from './ButtonBack';

describe('ButtonBack', () => {
  it('renders a button', () => {
    const onClick = jest.fn();
    render(<ButtonBack onClick={onClick} />);

    const button = screen.getByRole('button', { name: /zurück/i });
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onClick = jest.fn();
    render(<ButtonBack onClick={onClick} />);

    const button = screen.getByRole('button', { name: /zurück/i });
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
