import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonCheck from './ButtonCheck';

describe('ButtonCheck', () => {
  it('renders a button', () => {
    const onClick = jest.fn();
    render(<ButtonCheck onClick={onClick} isActive={false} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onClick = jest.fn();
    render(<ButtonCheck onClick={onClick} isActive={false} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Text "ungesehen" if isActive false', () => {
    const onClick = jest.fn();
    render(<ButtonCheck onClick={onClick} isActive={false} />);

    const button = screen.getByRole('button', { name: /noch nicht gesehen/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the Text "gesehen" if isActive true', () => {
    const onClick = jest.fn();
    render(<ButtonCheck onClick={onClick} isActive={true} />);

    const button = screen.getByRole('button', { name: /bereits gesehen/i });
    expect(button).toBeInTheDocument();
  });
});
