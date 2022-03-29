import styled from 'styled-components';

import Header from '../components/Header';
import PosterList from '../components/PosterList';

export default function Home({ popularSeries, popularMovies }) {
  return (
    <Wrapper>
      <Header />
      <main>
        <PosterList list={popularSeries} listName={'Beliebte Serien'} />
        <PosterList list={popularMovies} listName={'Beliebte Filme'} />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 95px;
  margin-bottom: 68px;
`;
