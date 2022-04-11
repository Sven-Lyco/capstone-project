import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProviderList from './ProviderList';

const providerList = {
  buy: [
    { provider_id: 1, provider_name: 'Provider 1' },
    { provider_id: 2, provider_name: 'Provider 2' },
    { provider_id: 3, provider_name: 'Provider 3' },
    { provider_id: 4, provider_name: 'Provider 4' },
  ],
  flatrate: [
    { provider_id: 1, provider_name: 'Provider 1' },
    { provider_id: 2, provider_name: 'Provider 2' },
    { provider_id: 3, provider_name: 'Provider 3' },
    { provider_id: 4, provider_name: 'Provider 4' },
  ],
};

describe('ProviderList', () => {
  it('renders the title of the list and one list', () => {
    render(
      <MemoryRouter>
        <ProviderList providerList={providerList} />
      </MemoryRouter>
    );

    const listTitle = screen.getByText('zu sehen auf:');
    expect(listTitle).toBeInTheDocument();

    const posterList = screen.getByRole('list');
    expect(posterList).toBeInTheDocument();
  });
});
