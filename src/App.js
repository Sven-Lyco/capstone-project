import { useState, useEffect } from 'react';
import styled from 'styled-components';

import PosterList from './components/PosterList';
import ScreenReaderOnly from './components/ScreenReaderOnly';
import WatchaHeader from './assets/images/header/watcha.svg';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_BASE_MOVIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

const popularSeriesUrl = `${REACT_APP_API_BASE_SERIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
const popularMoviesUrl = `${REACT_APP_API_BASE_MOVIES_URL}/popular?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}&region=DE`;

export default function App() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function loadPopularSeries() {
      try {
        const response = await fetch(popularSeriesUrl);
        const data = await response.json();
        setPopularSeries(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadPopularSeries();
  }, []);

  useEffect(() => {
    async function loadPopularMovies() {
      try {
        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadPopularMovies();
  }, []);

  return (
    <main>
      <StyledHeader>
        <h1>
          <ScreenReaderOnly>WATCHA</ScreenReaderOnly>
        </h1>
        <img src={WatchaHeader} alt="watcha" />
      </StyledHeader>
      <PosterList list={popularSeries} listName={'Beliebte Serien'} />
      <PosterList list={popularMovies} listName={'Beliebte Filme'} />
    </main>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 20px 0px;
  border-bottom: 1px solid var(--border-color);
`;
