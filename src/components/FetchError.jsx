import { GoSync } from 'react-icons/go';
import styled from 'styled-components';
import Button from './Button';

export default function FetchError({ onClick }) {
  return (
    <Section>
      <h1>ERROR</h1>
      <p>Irgendetwas funktioniert nicht wie es sollte</p>
      <Button buttonType="normal" onClick={onClick}>
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
