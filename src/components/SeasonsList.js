import { useState } from 'react';
import styled from 'styled-components';
import ButtonSeason from './ButtonSeason';
import Poster from './Poster';
import useSeasonDetails from '../hooks/useSeasonDetails';
import EpisodeCard from './EpisodeCard';

export default function SeasonsList({ seasons, seriesId }) {
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
          .filter(result => result.name !== 'Extras')
          .map(({ id, name, season_number: seasonNumber }) => (
            <ButtonSeason
              key={id}
              name={name}
              isActive={seasonNumber === currentSeasonNumber}
              onClick={() => handleSwitchSeason(seasonNumber)}
            />
          ))}
      </StyledList>
      <InfoWrapper>
        <Poster
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : require('../assets/images/poster.png')
          }
          alt={name}
        />
        <TextBox>
          <p>Staffel {currentSeasonNumber}</p>
          <p>{seasonEpisodes?.length} Episoden</p>
        </TextBox>
      </InfoWrapper>
      <StyledEpisodeList role="list">
        {seasonEpisodes?.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  margin: 0;

  p {
    font-size: larger;
  }
`;

const StyledEpisodeList = styled.ul`
  list-style: none;
  padding: 0;
`;
