import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonCheckMovie from './ButtonCheckMovie';

describe('ButtonCheckMovie', () => {
  it('renders', () => {
    render(
      <ButtonCheckMovie
        handleCheckMovie={() => jest.fn()}
        isMovieWatched={false}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(
      <ButtonCheckMovie
        handleCheckMovie={handleOnClick}
        isMovieWatched={false}
      />
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
