import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import { ReactComponent as TmdbIcon } from '../assets/images/header/tmdb_logo.svg';

export default function Home({ handleCheckIsAdult }) {
  return (
    <Wrapper>
      <Header />
      <StyledSection>
        <p>Diese Seite enthält Inhalte für Erwachsene!</p>
        <p>
          Um die Inhalte dieser Seite sehen zu können musst du bestätigen, dass
          du mindestens 18 Jahre alt bist!
        </p>
        <Button buttonType="green" onClick={() => handleCheckIsAdult(18)}>
          über 18
        </Button>
        <Button buttonType="red" onClick={() => handleCheckIsAdult()}>
          unter 18
        </Button>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Movie Database"
        >
          <StyledTmdbIcon />
        </a>
      </StyledSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    padding: 10px;
    text-align: center;
    line-height: 1.5;
  }
`;

const StyledTmdbIcon = styled(TmdbIcon)`
  width: 50px;
  height: auto;
  margin-top: 60px;
`;
