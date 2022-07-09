import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PosterList from '../components/PosterList';

export default function MoviesPage({
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
  margin: 70px 0 80px;
  overflow: scroll hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;
