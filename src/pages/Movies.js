import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import FetchError from '../components/FetchError';
import useCheckFetch from '../hooks/useCheckFetch';

export default function Movies({
  popularMovies,
  moviesOnCinema,
  upcomingMovies,
}) {
  const { data } = useCheckFetch(popularMovies, moviesOnCinema, upcomingMovies);

  return (
    <Wrapper>
      <Header />
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
