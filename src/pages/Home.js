import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import FetchError from '../components/FetchError';
import useCheckFetch from '../hooks/useCheckFetch';

export default function Home({ popularSeries, popularMovies }) {
  /* This page is still being modified. 
There will be no more movies and series displayed on the page in the future. 
popularMovies is intentionally duplicated to fulfill the condition. */
  const { data } = useCheckFetch(popularSeries, popularMovies, popularMovies);

  return (
    <Wrapper>
      <Header />
      {!data ? (
        <FetchError />
      ) : (
        <>
          <main>
            <PosterList list={popularSeries} listName={'Beliebte Serien'} />
            <PosterList list={popularMovies} listName={'Beliebte Filme'} />
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
