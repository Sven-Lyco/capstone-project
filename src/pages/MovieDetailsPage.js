import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Poster from '../components/Poster';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import LoadingSpinner from '../components/LoadingSpinner';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';
import useMovieDetails from '../hooks/useMovieDetails';

export default function SeriesDetailsPage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StyledButtonBack onClick={() => navigate(-1)}>
        <StyledArrowBackIcon />
        <ScreenReaderOnly>Zurück</ScreenReaderOnly>
      </StyledButtonBack>
      {!isLoading ? (
        <>
          <StyledBackdropImage backdropPath={movie.backdrop_path} />
          <StyledHeader>
            <Poster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : require('../assets/images/poster.png')
              }
              alt={`${movie.title}`}
            />
            <StyledHeaderBox>
              <StyledTitle>{movie.title}</StyledTitle>
              <p>
                {movie.release_date
                  ? movie.release_date.substr(0, 4)
                  : 'kein Release Datum vorhanden'}{' '}
                - {calcMovieTime(movie.runtime)}
              </p>
            </StyledHeaderBox>
          </StyledHeader>
          <StyledMain>
            <h3>Handlung</h3>
            <p>
              {movie.overview
                ? movie.overview
                : 'Aktuell ist leider keine Beschreibung verfügbar'}
            </p>
          </StyledMain>
        </>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
    </Wrapper>
  );

  function calcMovieTime(movieRunTime) {
    const hours = Math.floor(movieRunTime / 60);
    const minutes = Math.ceil((movieRunTime / 60 - hours) * 60);
    return `${hours} Std. ${minutes} min.`;
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledBackdropImage = styled.div`
  z-index: -1;
  position: relative;
  @media (min-width: 576px) {
    min-height: ${({ backdropPath }) => (backdropPath ? `360px` : `140px`)};
  }

  min-height: ${({ backdropPath }) => (backdropPath ? `300px` : `140px`)};

  height: 100%;
  background: ${({ backdropPath }) =>
      backdropPath
        ? `url(https://image.tmdb.org/t/p/original${backdropPath})`
        : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -60px;
  box-shadow: inset 0px -65px 50px 0px var(--color-black);
`;

const StyledButtonBack = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
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

const StyledTitle = styled.span`
  font-size: x-large;
  font-weight: bold;
  margin: 0;
  padding: 25px 0px 5px;
`;

const StyledHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  margin: 10px;
  width: 100%;

  p {
    font-size: large;
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
