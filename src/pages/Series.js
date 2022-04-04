import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import FetchError from '../components/FetchError';
import useCheckFetch from '../hooks/useCheckFetch';

export default function Series({ popularSeries, topRatedSeries, seriesOnTv }) {
  const { data } = useCheckFetch(popularSeries, topRatedSeries, seriesOnTv);

  return (
    <Wrapper>
      <Header />
      {!data ? (
        <FetchError />
      ) : (
        <>
          <main>
            <PosterList list={popularSeries} listName={'Beliebte Serien'} />
            <PosterList
              list={topRatedSeries}
              listName={'Top bewertete Serien'}
            />
            <PosterList list={seriesOnTv} listName={'Serien im TV'} />
          </main>
          <Navigation />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 68px;
`;
