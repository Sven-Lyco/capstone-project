import { render, screen } from '@testing-library/react';
import PosterList from './PosterList';

const listName = 'Beliebte Serien';

const list = [
  { id: 1, name: 'Title' },
  { id: 2, title: 'Title' },
  { id: 3, name: 'Title' },
  { id: 4, title: 'Title' },
];

describe('PosterList', () => {
  it('renders the title of the list, the list and 4 list items', () => {
    render(<PosterList list={list} listName={listName} />);

    const listTitle = screen.getByText('Beliebte Serien');
    expect(listTitle).toBeInTheDocument();

    const posterList = screen.getByRole('list');
    expect(posterList).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  it('renders 4 images with an alt text', () => {
    render(<PosterList list={list} listName={listName} />);

    const posterListImages = screen.getAllByRole('img');
    expect(posterListImages).toHaveLength(4);

    const posterListAltTexts = screen.getAllByAltText('Title');
    expect(posterListAltTexts).toHaveLength(4);
  });
});
