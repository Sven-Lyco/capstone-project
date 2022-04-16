import AddSeriesButton from './AddSeriesButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AddSeriesButton', () => {
  it('renders a button', () => {
    render(<AddSeriesButton onHandleAddSeries={() => jest.fn()} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has onClick function', () => {
    const onHandleAddSeries = jest.fn();
    render(<AddSeriesButton onHandleAddSeries={onHandleAddSeries} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onHandleAddSeries).toHaveBeenCalled();
  });
});
