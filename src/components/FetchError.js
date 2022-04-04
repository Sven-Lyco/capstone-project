import { GoSync } from 'react-icons/go';
import styled from 'styled-components';
import Button from './Button';

export default function FetchError() {
  return (
    <Wrapper>
      <h1>ERROR</h1>
      <span>Irgendetwas funktioniert nicht,</span>
      <span>wie es sollte</span>
      <Button buttonType="normal" onClick={() => window.location.reload(false)}>
        <GoSync />
        <span>Seite neu laden</span>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  span {
    text-align: center;
  }
`;
