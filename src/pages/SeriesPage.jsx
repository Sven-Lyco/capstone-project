import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PosterList from '../components/PosterList';

export default function SeriesPage({
  popularSeries,
  topRatedSeries,
  seriesOnTv,
}) {
  return (
    <Wrapper>
      <Header />
      <main>
        <PosterList list={popularSeries} listName={'Beliebte Serien'} />
        <PosterList list={topRatedSeries} listName={'Top bewertete Serien'} />
        <PosterList list={seriesOnTv} listName={'Serien im TV'} />
      </main>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 0 80px;
  overflow: scroll hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;
