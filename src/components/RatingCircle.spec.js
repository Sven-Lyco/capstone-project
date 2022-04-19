import RatingCircle from './RatingCircle';
import { render, screen } from '@testing-library/react';

const rating = 6;

describe('RatingCircle', () => {
  it('renders a RatingCircle with a rating', () => {
    render(<RatingCircle rating={rating} />);

    const ratingCircle = screen.getByText(/Bewertung/i);
    expect(ratingCircle).toBeInTheDocument();

    const ratingNumber = screen.getByText(6);
    expect(ratingNumber).toBeInTheDocument();
  });
});
