import styled from 'styled-components';
import Header from '../components/Header';
import PosterList from '../components/PosterList';
import Navigation from '../components/Navigation';

export default function Movies({
  popularMovies,
  moviesOnCinema,
  upcomingMovies,
}) {
  return (
    <Wrapper>
      <Header />
      <main>
        <PosterList list={popularMovies} listName={'Beliebte Filme'} />
        <PosterList list={moviesOnCinema} listName={'Aktuell im Kino'} />
        <PosterList list={upcomingMovies} listName={'Demnächst im Kino'} />
      </main>
      <Navigation />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 95px;
  margin-bottom: 68px;
`;
