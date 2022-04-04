import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Home({ handleCheckIsAdult }) {
  return (
    <Wrapper>
      <Header />
      <StyledSection>
        <span>Diese Seite enthält Inhalte für Erwachsene!</span>
        <span>
          Um Die Inhalte dieser Seite sehen zu können, musst du bestätigen dass
          du mindestens 18 Jahre alt bist!
        </span>
        <Button buttonType="green" onClick={() => handleCheckIsAdult(18)}>
          über 18
        </Button>
        <Button buttonType="red" onClick={() => handleCheckIsAdult()}>
          unter 18
        </Button>
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
  flex-wrap: wrap;
  flex-direction: column;

  span {
    padding: 10px;
    text-align: center;
    line-height: 1.5;
  }
`;
