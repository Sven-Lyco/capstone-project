import { WhisperSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

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
  height: 75vh;
`;
