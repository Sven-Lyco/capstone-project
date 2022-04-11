import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CastList from './CastList';

const listName = 'Hauptdarsteller';

const list = [
  { id: 1, name: 'Oscar Isaac', character: 'Moon Knight' },
  { id: 2, name: 'Lauren Cohan', character: 'Maggie Greene' },
];

describe('CastList', () => {
  it('renders the title of the list, the list and 2 list items', () => {
    render(
      <MemoryRouter>
        <CastList castList={list} listName={listName} />
      </MemoryRouter>
    );

    const listTitle = screen.getByRole('heading', { level: 3 });
    expect(listTitle).toHaveTextContent('Hauptdarsteller');

    const castList = screen.getByRole('list');
    expect(castList).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });

  it('renders 2 images with an alt text', () => {
    render(
      <MemoryRouter>
        <CastList castList={list} listName={listName} />
      </MemoryRouter>
    );

    const posterListImages = screen.getAllByRole('img');
    expect(posterListImages).toHaveLength(2);

    const firstPosterListAltText = screen.getByAltText('Oscar Isaac');
    expect(firstPosterListAltText).toBeInTheDocument();

    const secondPosterListAltText = screen.getByAltText('Lauren Cohan');
    expect(secondPosterListAltText).toBeInTheDocument();
  });
});
