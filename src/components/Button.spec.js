import Button from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const children = 'Hello';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>{children}</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<Button onClick={handleOnClick}>{children}</Button>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
