import styled from 'styled-components';

import Header from '../components/Header';
import PosterList from '../components/PosterList';
import watchaHeader from '../assets/images/header/watcha.svg';

export default function Home({ popularSeries, popularMovies }) {
  return (
    <Wrapper>
      <Header title="Watcha" src={watchaHeader} alt="watcha" />
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
