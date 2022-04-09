import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonCheckEpisode from './ButtonCheckEpisode';

describe('ButtonCheckEpisode', () => {
  it('renders a button', () => {
    render(
      <ButtonCheckEpisode
        handleCheckEpisode={() => jest.fn()}
        isEpisodeWatched={false}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const handleOnClick = jest.fn();
    render(
      <ButtonCheckEpisode
        handleCheckEpisode={handleOnClick}
        isEpisodeWatched={false}
      />
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
