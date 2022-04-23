import { render, screen } from '@testing-library/react';
import EpisodeCard from './EpisodeCard';

describe('EpisodeCard', () => {
  const episode = {
    id: 123,
    name: 'Title of Episode',
  };

  it('renders a listitem with correct text', () => {
    render(<EpisodeCard episode={episode} onCheckEpisode={() => jest.fn()} />);

    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();

    const text = screen.getByText('Title of Episode');
    expect(text).toBeInTheDocument();
  });
});
