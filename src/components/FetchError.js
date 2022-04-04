import { GoSync } from 'react-icons/go';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <Wrapper>
      <h1>ERROR</h1>
      <span>Irgendetwas ist funktioniert nicht</span>
      <span>wie es sollte</span>
      <StyledButton onClick={() => window.location.reload(false)}>
        <GoSync />
        <span>Seite neu laden</span>
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  height: 50px;
  text-decoration: none;
  background-color: var(--color-light-gray);
  color: var(--color-black);
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;
