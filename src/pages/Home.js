import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';

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
        <Button
          buttonType="green"
          onClick={() => handleCheckIsAdult(18)}
          text={'über 18'}
        />
        <Button
          buttonType="red"
          onClick={() => handleCheckIsAdult()}
          text={'unter 18'}
        />
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

  p {
    padding: 10px;
    text-align: center;
    line-height: 1.5;
  }
`;
