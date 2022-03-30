import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Poster from '../components/Poster';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default function SeriesDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const seriesDetailsUrl = `${REACT_APP_API_BASE_SERIES_URL}/${id}?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(seriesDetailsUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, [seriesDetailsUrl]);

  console.log(data.first_air_date);

  return (
    <>
      <StyledBackdropImage backdropPath={data.backdrop_path} />
      <StyledHeader>
        <Poster
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
              : require('../assets/images/poster.png')
          }
          alt={`${data.name}`}
        />
        <StyledHeaderText>
          <h1>{data.name}</h1>
          <h2>
            {data.number_of_seasons} Staffeln -{' '}
            {data.first_air_date
              ? data.first_air_date.substr(0, 4)
              : 'Hello World'}
          </h2>
        </StyledHeaderText>
      </StyledHeader>
      <StyledMain>
        <h3>Handlung</h3>
        <p>
          {data.overview
            ? data.overview
            : 'Aktuell ist leider keine Beschreibung verfügbar'}
        </p>
      </StyledMain>
    </>
  );
}

const StyledBackdropImage = styled.div`
  z-index: -1;
  position: relative;
  width: 100vw;
  min-height: 250px;
  height: 100%;
  background: ${({ backdropPath }) =>
      `url(https://image.tmdb.org/t/p/w780${backdropPath})`}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -80px;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 30%, #121212 100%);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  margin-left: 20px;
`;

const StyledHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0;
  margin: 10px;
  width: 100%;

  h1 {
    font-size: x-large;
    margin: 0;
    padding: 5px;
  }
  h2 {
    font-size: larger;
    font-style: italic;
    margin: 0;
    padding: 5px;
  }
`;

const StyledMain = styled.main`
  margin: 20px;
  padding: 0;
`;
