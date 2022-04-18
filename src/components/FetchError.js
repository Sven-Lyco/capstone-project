import styled from 'styled-components';
import { GoSync } from 'react-icons/go';
import Button from './Button';

export default function FetchError() {
  return (
    <Section>
      <h1>ERROR</h1>
      <p>Irgendetwas funktioniert nicht wie es sollte</p>
      <Button buttonType="normal" onClick={() => window.location.reload(false)}>
        <GoSync />
        <span>Seite neu laden</span>
      </Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  p {
    text-align: center;
  }
`;
