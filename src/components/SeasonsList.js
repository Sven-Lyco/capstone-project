import { useState } from 'react';
import styled from 'styled-components';
import ButtonSeason from './ButtonSeason';
import Poster from './Poster';
import defaultPoster from '../assets/images/poster.png';
import useSeasonDetails from '../hooks/useSeasonDetails';
import EpisodeCard from './EpisodeCard';

export default function SeasonsList({
  seasons,
  seriesId,
  episodeRunTime,
  isOnWatchlist,
  handleCheckEpisode,
  isEpisodeWatched,
}) {
  const [currentSeasonNumber, setCurrentSeasonNumber] = useState(1);
  const currentSeason = seasons?.find(
    ({ season_number: seasonNumber }) => seasonNumber === currentSeasonNumber
  );
  const fetchURL = `${seriesId}/season/${currentSeasonNumber}`;
  const { seasonDetails } = useSeasonDetails(fetchURL);
  const { poster_path: posterPath, name } = currentSeason;
  const seasonEpisodes = seasonDetails.episodes;

  return (
    <section>
      <StyledList role="list">
        {seasons
          ?.filter(result => result.name !== 'Extras')
          .map(({ id, name, season_number: seasonNumber }) => (
            <li key={id}>
              <ButtonSeason
                name={name}
                isActive={seasonNumber === currentSeasonNumber}
                onClick={() => handleSwitchSeason(seasonNumber)}
              />
            </li>
          ))}
      </StyledList>
      <InfoWrapper>
        <Poster
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : defaultPoster
          }
          alt={name}
        />
        <TextBox>
          <span>Staffel {currentSeasonNumber}</span>
          <p>{seasonEpisodes?.length} Episoden</p>
          <p>{episodeRunTime}min. pro Episode</p>
        </TextBox>
      </InfoWrapper>
      <StyledEpisodeList role="list">
        {seasonEpisodes?.map(episode => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            isOnWatchlist={isOnWatchlist}
            isEpisodeWatched={isEpisodeWatched(episode.id)}
            handleCheckEpisode={handleCheckEpisode}
          />
        ))}
      </StyledEpisodeList>
    </section>
  );

  function handleSwitchSeason(seasonNumber) {
    setCurrentSeasonNumber(seasonNumber);
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0 0 0 20px;
  margin: 0;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const TextBox = styled.div`
  max-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;
  margin: 0;

  span {
    font-size: larger;
  }

  p {
    margin: 0;
    font-size: large;
    font-style: italic;
  }
`;

const StyledEpisodeList = styled.ul`
  list-style: none;
  padding: 0;
`;
