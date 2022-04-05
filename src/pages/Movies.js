import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import FetchError from '../components/FetchError';
import useCheckFetch from '../hooks/useCheckFetch';
import { useNavigate } from 'react-router-dom';

export default function Movies({
  isAdult,
  popularMovies,
  moviesOnCinema,
  upcomingMovies,
}) {
  const { data } = useCheckFetch(popularMovies, moviesOnCinema, upcomingMovies);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      {!isAdult ? navigate('../child') : navigate('../filme')}
      {!data ? (
        <FetchError />
      ) : (
        <>
          <main>
            <PosterList list={popularMovies} listName={'Beliebte Filme'} />
            <PosterList list={moviesOnCinema} listName={'Aktuell im Kino'} />
            <PosterList list={upcomingMovies} listName={'Demnächst im Kino'} />
          </main>
          <Navigation />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 0 68px;
`;
