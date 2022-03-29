import styled from 'styled-components';

import Header from '../components/Header';
import seriesHeader from '../assets/images/header/serien.svg';
import PosterList from '../components/PosterList';

export default function Series({ popularSeries, topRatedSeries, seriesOnTv }) {
  return (
    <Wrapper>
      <Header title="serien" src={seriesHeader} alt="serien" />
      <main>
        <PosterList list={popularSeries} listName={'Beliebte Serien'} />
        <PosterList list={topRatedSeries} listName={'Top bewertete Serien'} />
        <PosterList list={seriesOnTv} listName={'Serien im TV'} />
      </main>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 95px;
  margin-bottom: 68px;
`;
