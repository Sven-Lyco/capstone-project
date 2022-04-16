import AddMovieButton from './AddMovieButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AddMovieButton', () => {
  it('renders a button', () => {
    render(<AddMovieButton onHandleAddMovie={() => jest.fn()} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onHandleAddMovie = jest.fn();
    render(<AddMovieButton onHandleAddMovie={onHandleAddMovie} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onHandleAddMovie).toHaveBeenCalled();
  });
});
