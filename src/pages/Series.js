import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';

export default function Series({ popularSeries, topRatedSeries, seriesOnTv }) {
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
  margin-top: 95px;
  margin-bottom: 68px;
`;
