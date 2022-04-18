import styled from 'styled-components';
import Header from '../components/Header';

export default function ChildPage() {
  return (
    <Wrapper>
      <Header />
      <Section>
        <p>Du bist leider noch zu jung, um diese Seite nutzen zu können</p>
        <p>
          <a href="https://www.schau-hin.info/sicherheit-risiken/wie-arbeitet-und-entscheidet-die-fsk">
            Hier
          </a>{' '}
          findest du weitere Informationen 🙂
        </p>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
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
