import styled from 'styled-components';
import { WhisperSpinner } from 'react-spinners-kit';

export default function LoadingSpinner() {
  return (
    <Wrapper>
      <WhisperSpinner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
