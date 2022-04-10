import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CastList from './CastList';

const listName = 'Hauptdarsteller';

const list = [
  { id: 1, name: 'Name', character: 'Character' },
  { id: 2, name: 'Name', character: 'Character' },
];

describe('CastList', () => {
  it('renders the title of the list, the list and 2 list items', () => {
    render(
      <MemoryRouter>
        <CastList castList={list} listName={listName} />
      </MemoryRouter>
    );

    const listTitle = screen.getByText('Hauptdarsteller');
    expect(listTitle).toBeInTheDocument();

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

    const posterListAltTexts = screen.getAllByAltText('Name');
    expect(posterListAltTexts).toHaveLength(2);
  });
});
