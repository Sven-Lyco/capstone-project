import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';

export default function HomePage({ handleCheckIsAdult }) {
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
      </StyledSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
