import SearchPage from './SearchPage';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

describe('Navigation', () => {
  it('renders an input', () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <SearchPage onSubmit={callback} />
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox', { name: 'Suche' });
    expect(input).toBeInTheDocument();
  });
});
