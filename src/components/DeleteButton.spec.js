import DeleteButton from './DeleteButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('DeleteButton', () => {
  it('renders a button', () => {
    render(<DeleteButton onHandleDeleteItem={() => jest.fn()} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onHandleDeleteItem = jest.fn();
    render(<DeleteButton onHandleDeleteItem={onHandleDeleteItem} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onHandleDeleteItem).toHaveBeenCalled();
  });
});
