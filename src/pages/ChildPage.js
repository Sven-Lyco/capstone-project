import styled from 'styled-components';
import Header from '../components/Header';

export default function ChildPage() {
  return (
    <Wrapper>
      <Header />
      <StyledSection>
        <p>Du bist leider noch zu jung, um diese Seite nutzen zu können</p>
        <p>
          <a href="https://www.schau-hin.info/filme-serien">Hier</a> findest du
          weitere Informationen 🙂
        </p>
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

  a {
    color: inherit;
  }
`;
