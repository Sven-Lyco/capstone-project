import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import PAGES from '../assets/pages';

import AddButton from '../components/AddButton';
import ButtonBack from '../components/ButtonBack';
import CastList from '../components/CastList';
import DeleteButton from '../components/DeleteButton';
import InnerNavigation from '../components/InnerNavigation';
import LoadingSpinner from '../components/LoadingSpinner';
import Navigation from '../components/Navigation';
import Poster from '../components/Poster';
import PosterList from '../components/PosterList';
import ProviderList from '../components/ProviderList';
import RatingCircle from '../components/RatingCircle';
import ReloadButton from '../components/ReloadButton';
import SeasonsList from '../components/SeasonsList';
import VideoFrame from '../components/VideoFrame';

import useSeriesDetails from '../hooks/useSeriesDetails';
import useShowTrailer from '../hooks/useShowTrailer';

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
      <ButtonBack onClick={() => navigate(-1)} />
      {!isLoading ? (
        <>
          {showTrailer && <VideoFrame videoUrl={seriesTrailerUrl} />}
          {!showTrailer && <BackdropImage backdropPath={backdropPath} />}
          <Header>
            <Poster
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : require('../assets/images/poster.png')
              }
              alt={`${name}`}
            />
            <HeaderBox>
              <Title>{name}</Title>
              <p>
                {numberOfSeasons}
                {numberOfSeasons === 1 ? ' Staffel - ' : ' Staffeln - '}

                {firstAirDate
                  ? firstAirDate.substr(0, 4)
                  : 'kein Release Datum vorhanden'}
              </p>
              <RatingCircle rating={rating} />
            </HeaderBox>
            <ButtonWrapper>
              {!isOnWatchlist && (
                <AddButton
                  onClick={() => {
                    onHandleAddSeries(id, name, posterPath);
                    toast.success('zur Watchlist hinzugefügt');
                  }}
                />
              )}
              {isOnWatchlist && (
                <DeleteButton
                  onClick={() => {
                    onHandleDeleteItem(id);
                    toast.error('von Watchlist entfernt');
                  }}
                />
              )}
              {showTrailer && (
                <ReloadButton onClick={() => window.location.reload(false)} />
              )}
            </ButtonWrapper>
          </Header>
          <InnerNavigation
            currentPage={currentPage}
            handleNavigation={handleNavigation}
          />
          {currentPage === PAGES.DETAILS && (
            <>
              {seriesWatchProviders && (
                <ProviderList providerList={seriesWatchProviders} />
              )}
              <Main>
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
              </Main>
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
      <Navigation />
    </Wrapper>
  );

  function handleNavigation(page) {
    setCurrentPage(page);
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 90px;
`;

const PosterListWrapper = styled.div`
  margin: -10px -20px;
`;

const BackdropImage = styled.div`
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

const Header = styled.header`
  display: flex;
  max-height: 170px;
  margin: 0 0 20px 20px;
  position: relative;
`;

const Title = styled.span`
  font-size: x-large;
  font-weight: bold;
  margin: 0;
  padding: 20px 0 5px;
`;

const HeaderBox = styled.div`
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

const Main = styled.main`
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
