import styled from 'styled-components';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import { ReactComponent as TmdbIcon } from '../assets/images/header/tmdb_logo.svg';
import Navigation from '../components/Navigation';

export default function InfoPage({ isChecked, handleToggleSwitch }) {
  return (
    <Wrapper>
      <Header />
      <StyledSection>
        <h2>Herzlich Willkommen bei Watcha!</h2>
        <p>
          Mithilfe von Watcha kannst du neue Filme und Serien entdecken und
          diese auf deine Watchlist setzen.
        </p>
        <p>
          Einzelne Filme und Episoden einer Serie kannst du als gesehen
          markieren, sodass du immer weißt, welchen Film du schon gesehen hast
          oder wo du bei einer Serie stehengeblieben bist.
        </p>
        <p>
          Auf den einzelnen Detailseiten bekommst du Informationen über den Film
          oder eine Serie.
        </p>
        <p>Happy Watching! 🍿 📺</p>
        <InfoBox>
          <SettingsInfo>
            Du kannst auf dieser Seite für dich selbst einstellen, ob du lieber
            die Trailer sehen möchtest oder ob das Hintergrundbild angezeigt
            werden soll. Wichtig, wenn kein Trailer für einen Film oder eine
            Serie vorhanden ist, wird dir automatisch das Hintergrundbild
            angezeigt. Falls du die Trailer aktiviert hast und dir eine
            Information angezeigt wird, dass das Video nicht verfügbar ist, lade
            bitte die Seite über den Reload-Button neu.
          </SettingsInfo>
          <SettingsWrapper>
            <p>Trailer anzeigen:</p>
            <ToggleSwitch
              onChange={event => {
                handleToggleSwitch(event);
              }}
              checked={isChecked}
            />
          </SettingsWrapper>
        </InfoBox>
        <p>
          Alle angezeigten Inhalte dieser App werden von The Movie Database
          bereitgestellt.
        </p>
        <p>
          Die einzelnen Listen von Streaminganbietern, auf den Detailseiten von
          Serien und Filmen, werden über The MovieDatabase in Kooperation mit
          JustWatch bereitgestellt. Auf den Detailseiten, kannst du "zu sehen
          auf" anklicken, um weitere Informationen bekommen.
        </p>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Movie Database"
        >
          <StyledTmdbIcon />
        </a>
      </StyledSection>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 0 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    margin-top: 10px;
    padding: 0 15px;
    text-align: center;
    line-height: 1.5;
  }
`;

const InfoBox = styled.div`
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 15px 0;
  padding-top: 5px;
`;

const SettingsInfo = styled.p`
  margin-top: 10px;
  padding: 0 15px;
  text-align: center;
  line-height: 1.5;
  font-size: medium;
  font-style: italic;
`;

const StyledTmdbIcon = styled(TmdbIcon)`
  width: 50px;
  height: auto;
`;
