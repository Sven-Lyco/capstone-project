import { render, screen } from '@testing-library/react';
import SeasonsList from './SeasonsList';

const seasons = [
  {
    id: 1,
    air_date: '2010-10-31',
    episode_count: 6,
    name: 'Staffel 1',
    poster_path: '/6jXMDYnHzrTfm1GAmCd5b2SbNmk.jpg',
    season_number: 1,
  },
  {
    id: 2,
    air_date: '2011-10-16',
    episode_count: 13,
    name: 'Staffel 2',
    poster_path: '/vwxoOPzt0ouWvSAzOFqPEYtNR4t.jpg',
    season_number: 2,
  },
];

describe('SeasonsList', () => {
  it('renders a button for each season', () => {
    render(<SeasonsList seasons={seasons} />);

    const firstButton = screen.getByRole('button', { name: 'Staffel 1' });
    const secondButton = screen.getByRole('button', { name: 'Staffel 2' });
    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();
  });

  it('renders an image for a season', () => {
    render(<SeasonsList seasons={seasons} />);

    const firstImage = screen.getByRole('img', { name: 'Staffel 1' });
    expect(firstImage).toBeInTheDocument();
  });
});
