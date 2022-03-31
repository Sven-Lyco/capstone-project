import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import useDetails from '../hooks/useDetails';
import Poster from '../components/Poster';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';

const {
  REACT_APP_API_BASE_SERIES_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default function SeriesDetailsPage() {
  const { id } = useParams();
  const seriesDetailsUrl = `${REACT_APP_API_BASE_SERIES_URL}/${id}?api_key=${REACT_APP_API_KEY}&language=${REACT_APP_API_LANGUAGE}`;
  const { data: series } = useDetails(seriesDetailsUrl);

  return (
    <Wrapper>
      <StyledLinkBack to="/serien">
        <StyledArrowBackIcon />
        <ScreenReaderOnly>Zurück</ScreenReaderOnly>
      </StyledLinkBack>
      <StyledBackdropImage backdropPath={series.backdrop_path} />
      <StyledHeader>
        <Poster
          src={
            series.poster_path
              ? `https://image.tmdb.org/t/p/w300${series.poster_path}`
              : require('../assets/images/poster.png')
          }
          alt={`${series.name}`}
        />
        <StyledHeaderText>
          <h1>{series.name}</h1>
          <h2>
            {series.number_of_seasons} Staffeln -{' '}
            {series.first_air_date
              ? series.first_air_date.substr(0, 4)
              : 'kein Datum vorhanden'}
          </h2>
        </StyledHeaderText>
      </StyledHeader>
      <StyledMain>
        <h3>Handlung</h3>
        <p>
          {series.overview
            ? series.overview
            : 'Aktuell ist leider keine Beschreibung verfügbar'}
        </p>
      </StyledMain>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 768px;
  width: 100%;
`;

const StyledBackdropImage = styled.div`
  z-index: -1;
  position: relative;
  @media (min-width: 576px) {
    min-height: 360px;
  }
  min-height: 300px;
  height: 100%;
  background: ${({ backdropPath }) =>
      backdropPath ? `url(https://image.tmdb.org/t/p/w780${backdropPath})` : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -60px;
  box-shadow: inset 0px -65px 50px 0px var(--color-black);
`;

const StyledLinkBack = styled(Link)`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  left: 12px;
  color: var(--color-green);
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: var(--border-radius);
`;

const StyledHeader = styled.header`
  display: flex;
  max-height: 180px;
  margin-left: 20px;
`;

const StyledHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  margin: 10px;
  width: 100%;

  h1 {
    font-size: xx-large;
    margin: 0;
    padding: 25px 0px 5px;
  }
  h2 {
    font-size: larger;
    font-style: italic;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

const StyledMain = styled.main`
  margin: 20px;
  padding: 0;
`;
