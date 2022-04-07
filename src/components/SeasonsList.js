import { useState } from 'react';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';
import ButtonSeason from './ButtonSeason';

export default function SeasonsList({ seasons }) {
  const [currentSeasonNumber, setCurrentSeasonNumber] = useState(1);
  const currentSeason = seasons?.find(
    ({ season_number: seasonNumber }) => seasonNumber === currentSeasonNumber
  );

  console.log(currentSeasonNumber);

  return (
    <>
      {seasons ? (
        <StyledList role="list">
          {seasons
            .filter(result => result.name !== 'Extras')
            .map(({ id, name, season_number: seasonNumber }) => (
              <li key={id}>
                <ButtonSeason
                  name={name}
                  isActive={seasonNumber === currentSeasonNumber}
                  onClick={() => handleSwitchSeason(seasonNumber)}
                >
                  {name}
                </ButtonSeason>
              </li>
            ))}
        </StyledList>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
      <>{console.log(currentSeason)}</>
    </>
  );

  function handleSwitchSeason(seasonNumber) {
    setCurrentSeasonNumber(seasonNumber);
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0 0 0 20px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`;
