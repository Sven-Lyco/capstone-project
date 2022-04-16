import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';
import PAGES from '../assets/pages';
import useSeriesDetails from '../hooks/useSeriesDetails';
import useShowTrailer from '../hooks/useShowTrailer';
import AddSeriesButton from '../components/AddSeriesButton';
import CastList from '../components/CastList';
import DeleteButton from '../components/DeleteButton';
import InnerNavigation from '../components/InnerNavigation';
import LoadingSpinner from '../components/LoadingSpinner';
import Poster from '../components/Poster';
import PosterList from '../components/PosterList';
import ProviderList from '../components/ProviderList';
import ReloadButton from '../components/ReloadButton';
import SeasonsList from '../components/SeasonsList';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import VideoFrame from '../components/VideoFrame';

export default function SeriesDetailsPage({
  isChecked,
  onHandleAddSeries,
  checkIsOnWatchlist,
  onHandleDeleteItem,
  handleCheckEpisode,
  isEpisodeWatched,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(PAGES.DETAILS);
  const {
    seriesTrailerUrl,
    similarSeries,
    seriesWatchProviders,
    seriesCast,
    seriesDetails,
    isLoading,
  } = useSeriesDetails(id);
  const isOnWatchlist = checkIsOnWatchlist(id);
  const {
    name,
    poster_path: posterPath,
    number_of_seasons: numberOfSeasons,
    first_air_date: firstAirDate,
    overview,
    backdrop_path: backdropPath,
    seasons,
    episode_run_time,
    vote_average: rating,
  } = seriesDetails;
  const { showTrailer } = useShowTrailer({
    isChecked,
    trailerUrl: seriesTrailerUrl,
  });

  return (
    <Wrapper>
      <StyledButtonBack onClick={() => navigate(-1)}>
        <StyledArrowBackIcon />
        <ScreenReaderOnly>Zurück</ScreenReaderOnly>
      </StyledButtonBack>
      {!isLoading ? (
        <>
          {showTrailer && <VideoFrame videoUrl={seriesTrailerUrl} />}
          {!showTrailer && <StyledBackdropImage backdropPath={backdropPath} />}
          <StyledHeader>
            <Poster
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : require('../assets/images/poster.png')
              }
              alt={`${name}`}
            />
            <StyledHeaderBox>
              <StyledTitle>{name}</StyledTitle>
              <p>
                {numberOfSeasons}
                {numberOfSeasons === 1 ? ' Staffel - ' : ' Staffeln - '}

                {firstAirDate
                  ? firstAirDate?.substr(0, 4)
                  : 'kein Release Datum vorhanden'}
              </p>
              <p>Bewertung: {rating} / 10</p>
            </StyledHeaderBox>
            <ButtonWrapper>
              {!isOnWatchlist && (
                <AddSeriesButton
                  id={id}
                  name={name}
                  posterPath={posterPath}
                  onHandleAddSeries={onHandleAddSeries}
                />
              )}
              {isOnWatchlist && (
                <DeleteButton id={id} onHandleDeleteItem={onHandleDeleteItem} />
              )}
              {showTrailer && (
                <ReloadButton onClick={() => window.location.reload(false)} />
              )}
            </ButtonWrapper>
          </StyledHeader>
          <InnerNavigation
            currentPage={currentPage}
            handleNavigation={handleNavigation}
          />
          {currentPage === PAGES.DETAILS && (
            <>
              {seriesWatchProviders && (
                <ProviderList providerList={seriesWatchProviders} />
              )}
              <StyledMain>
                <h3>Handlung</h3>
                <p>
                  {overview
                    ? overview
                    : 'Aktuell ist leider keine Beschreibung verfügbar'}
                </p>
                <CastList castList={seriesCast} listName="Hauptdarsteller" />
                <PosterListWrapper>
                  <PosterList list={similarSeries} listName="ähnliche Serien" />
                </PosterListWrapper>
              </StyledMain>
            </>
          )}
          {currentPage === PAGES.SEASONS && (
            <SeasonsList
              seriesId={id}
              seasons={seasons}
              handleCheckEpisode={handleCheckEpisode}
              isEpisodeWatched={isEpisodeWatched}
              episodeRunTime={episode_run_time[0]}
            />
          )}
        </>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
    </Wrapper>
  );

  function handleNavigation(page) {
    setCurrentPage(page);
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PosterListWrapper = styled.div`
  margin: -10px -20px;
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
  cursor: pointer;
  color: var(--color-white);
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0;
  margin: 0 10px;
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
  margin-right: 12px;
`;
