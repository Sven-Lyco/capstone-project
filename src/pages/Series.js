import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import useCheckFetch from '../hooks/useCheckFetch';
import FetchError from '../components/FetchError';

export default function Series({
  popularSeries,
  topRatedSeries,
  seriesOnTv,
  isAdult,
}) {
  const { data } = useCheckFetch(popularSeries, topRatedSeries, seriesOnTv);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      {!isAdult ? navigate('../child') : navigate('../serien')}
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
