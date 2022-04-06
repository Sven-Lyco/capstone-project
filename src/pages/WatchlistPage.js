import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Poster from '../components/Poster';

export default function WatchlistPage({ watchlist }) {
  return (
    <Wrapper>
      <Header />
      {watchlist.length === 0 ? (
        <p>Du hast noch keine Serien oder Filme auf deiner Watchlist.</p>
      ) : (
        <StyledList role="list">
          {watchlist.map(({ name, title, posterPath, id }) => (
            <li key={id}>
              <Link to={name ? `/serie/${id}` : `/film/${id}`}>
                <Poster
                  src={
                    posterPath
                      ? `https://image.tmdb.org/t/p/w300${posterPath}`
                      : require('../assets/images/poster.png')
                  }
                  alt={name ? `${name}` : `${title}`}
                />
              </Link>
            </li>
          ))}
        </StyledList>
      )}

      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 0 80px;

  p {
    text-align: center;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0 8px;
  margin: 0;
`;
