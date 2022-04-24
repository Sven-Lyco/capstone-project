import ButtonSeason from './ButtonSeason';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ButtonSeason', () => {
  it('renders a button', () => {
    render(<ButtonSeason onClick={() => jest.fn()} name="Staffel 1" />);

    const button = screen.getByRole('button', { name: /staffel/i });
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(<ButtonSeason onClick={handleOnClick} name="Staffel 1" />);

    const button = screen.getByRole('button', { name: /staffel/i });
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });

  it('has the correct button text', () => {
    render(<ButtonSeason onClick={() => jest.fn()} name="Staffel 1" />);

    const text = screen.getByText('Staffel 1');
    expect(text).toBeInTheDocument();
  });
});
