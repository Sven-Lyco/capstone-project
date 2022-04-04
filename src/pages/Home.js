import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import FetchError from '../components/FetchError';
import useCheckFetch from '../hooks/useCheckFetch';

export default function Home({ popularSeries, popularMovies }) {
  const { data } = useCheckFetch(popularSeries, popularMovies);

  return (
    <Wrapper>
      <Header />
      {!data && <FetchError />}
      {data && (
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
