import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';

import AddButton from '../components/AddButton';
import ButtonCheck from '../components/ButtonCheck';
import CastList from '../components/CastList';
import DeleteButton from '../components/DeleteButton';
import FetchError from '../components/FetchError';
import LoadingSpinner from '../components/LoadingSpinner';
import Poster from '../components/Poster';
import PosterList from '../components/PosterList';
import ProviderList from '../components/ProviderList';
import ReloadButton from '../components/ReloadButton';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import VideoFrame from '../components/VideoFrame';

import useMovie from '../hooks/useMovie';
import useMovieDetails from '../hooks/useMovieDetails';
import useShowTrailer from '../hooks/useShowTrailer';

export default function MoviesDetailsPage({
  isChecked,
  onHandleAddMovie,
  checkIsOnWatchlist,
  onHandleDeleteItem,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    movieTrailerUrl,
    similarMovies,
    movieWatchProviders,
    movieCast,
    movieDetails,
    isLoading,
  } = useMovieDetails(id);
  const { watchedMoviesError, handleCheckMovie, checkIsMovieWatched } =
    useMovie();
  const isOnWatchlist = checkIsOnWatchlist(id);
  const {
    title,
    poster_path: posterPath,
    runtime,
    release_date: releaseDate,
    overview,
    backdrop_path: backdropPath,
    vote_average: rating,
  } = movieDetails;
  const { showTrailer } = useShowTrailer({
    isChecked,
    trailerUrl: movieTrailerUrl,
  });

  if (watchedMoviesError) return <FetchError />;

  return (
    <Wrapper>
      <StyledButtonBack onClick={() => navigate(-1)}>
        <StyledArrowBackIcon />
        <ScreenReaderOnly>Zurück</ScreenReaderOnly>
      </StyledButtonBack>
      {!isLoading && (
        <>
          {showTrailer && <VideoFrame videoUrl={movieTrailerUrl} />}
          {!showTrailer && <StyledBackdropImage backdropPath={backdropPath} />}
          <StyledHeader>
            <Poster
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : require('../assets/images/poster.png')
              }
              alt={`${title}`}
            />
            <StyledHeaderBox>
              <StyledTitle>{title}</StyledTitle>
              <p>
                {releaseDate
                  ? releaseDate?.substr(0, 4)
                  : 'kein Release Datum vorhanden'}{' '}
                - {calcMovieTime(runtime)}
              </p>
              <p>Bewertung: {rating} / 10</p>
            </StyledHeaderBox>
            <ButtonWrapper>
              <ButtonCheck
                onClick={() => handleCheckMovie(id, title)}
                isActive={checkIsMovieWatched(id)}
              />
              {!isOnWatchlist && (
                <AddButton
                  onClick={() => onHandleAddMovie(id, title, posterPath)}
                />
              )}
              {isOnWatchlist && (
                <DeleteButton onClick={() => onHandleDeleteItem(id)} />
              )}
              {showTrailer && (
                <ReloadButton onClick={() => window.location.reload(false)} />
              )}
            </ButtonWrapper>
          </StyledHeader>
          {movieWatchProviders && (
            <ProviderList providerList={movieWatchProviders} />
          )}
          <StyledMain>
            <h3>Handlung</h3>
            <p>
              {overview
                ? overview
                : 'Aktuell ist leider keine Beschreibung verfügbar'}
            </p>
            <CastList castList={movieCast} listName="Hauptdarsteller" />
            <PosterListWrapper>
              <PosterList list={similarMovies} listName="ähnliche Filme" />
            </PosterListWrapper>
          </StyledMain>
        </>
      )}
      {isLoading && <LoadingSpinner />}
    </Wrapper>
  );

  function calcMovieTime(movieRunTime) {
    const hours = Math.floor(movieRunTime / 60);
    const minutes = Math.ceil((movieRunTime / 60 - hours) * 60);
    return `${hours} Std. ${minutes} min.`;
  }
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const PosterListWrapper = styled.div`
  margin: -10px 0 0 -20px;
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
  box-shadow: inset 0 -65px 50px 0 var(--color-black);
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
  color: var(--color-white);
  cursor: pointer;
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: var(--border-radius);
`;

const StyledHeader = styled.header`
  display: flex;
  max-height: 170px;
  margin: 0 0 20px 20px;
`;

const StyledTitle = styled.span`
  font-size: x-large;
  font-weight: bold;
  margin: 0;
  padding: 20px 0 5px;
`;

const StyledHeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0;
  margin: 0 10px;

  p {
    margin: 0;
    padding: 0;
    font-size: large;
    font-style: italic;
    font-weight: 400;
  }
`;

const StyledMain = styled.main`
  margin: 10px 20px;
  padding: 0;

  h3 {
    font-size: x-large;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
