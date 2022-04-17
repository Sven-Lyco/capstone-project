import { render, screen } from '@testing-library/react';
import SeasonsList from './SeasonsList';

const seasons = [
  {
    id: 1,
    name: 'Staffel 1',
    season_number: 1,
  },
  {
    id: 2,
    name: 'Staffel 2',
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
