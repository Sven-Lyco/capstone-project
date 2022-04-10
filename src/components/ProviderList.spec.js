import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProviderList from './ProviderList';

const listName = 'zu sehen auf:';

const list1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

describe('ProviderList', () => {
  it('renders the title of the list and two lists', () => {
    render(
      <MemoryRouter>
        <ProviderList providerList={list1} listName={listName} />
      </MemoryRouter>
    );

    const listTitle = screen.getByText('zu sehen auf:');
    expect(listTitle).toBeInTheDocument();

    const posterList = screen.getByRole('list');
    expect(posterList).toBeInTheDocument();
  });
});
