import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMovie from '../hooks/useMovie';
import useSeries from '../hooks/useSeries';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Poster from '../components/Poster';

export default function WatchlistPage({ watchlist }) {
  const { checkIsMovieWatched } = useMovie();
  const { checkIsSeriesWatched } = useSeries();

  return (
    <Wrapper>
      <Header />
      {watchlist?.length === 0 ? (
        <InfoBox>
          <p>👻</p>
          <p>Deine Watchlist ist aktuell leer.</p>
        </InfoBox>
      ) : (
        <List role="list">
          {watchlist?.map(({ name, title, posterPath, id }) => (
            <li key={id}>
              <Link to={name ? `/serie/${id}` : `/film/${id}`}>
                <Poster
                  src={
                    posterPath
                      ? `https://image.tmdb.org/t/p/w300${posterPath}`
                      : require('../assets/images/poster.png')
                  }
                  alt={name ? `${name}` : `${title}`}
                  isWatched={checkIsWatched(id)}
                />
              </Link>
            </li>
          ))}
        </List>
      )}
      <Navigation />
    </Wrapper>
  );

  function checkIsWatched(id) {
    if (checkIsMovieWatched(id)) {
      return true;
    }
    if (checkIsSeriesWatched(id)) {
      return true;
    }
  }
}

const Wrapper = styled.div`
  margin: 70px 0 90px;
  overflow: scroll hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;

const InfoBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 20px;

  p {
    text-align: center;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
  padding: 0 10px;
  margin: 0;
`;
