import Header from '../components/Header';
import PosterList from '../components/PosterList';
import watchaHeader from '../assets/images/header/watcha.svg';

export default function Home({ popularSeries, popularMovies }) {
  return (
    <>
      <Header title="Watcha" src={watchaHeader} alt="watcha" />
      <main>
        <PosterList list={popularSeries} listName={'Beliebte Serien'} />
        <PosterList list={popularMovies} listName={'Beliebte Filme'} />
      </main>
    </>
  );
}
