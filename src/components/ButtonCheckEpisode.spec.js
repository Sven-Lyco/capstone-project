import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonCheckEpisode from './ButtonCheckEpisode';

describe('ButtonEpisodeCheck', () => {
  it('renders', () => {
    render(
      <ButtonCheckEpisode
        id={123}
        onCheckEpisode={() => jest.fn()}
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
        id={123}
        onCheckEpisode={handleOnClick}
        isEpisodeWatched={false}
      />
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
