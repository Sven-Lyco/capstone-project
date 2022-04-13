import styled from 'styled-components';
import { GoSync } from 'react-icons/go';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function ReloadButton({ onClick }) {
  return (
    <>
      <StyledButton onClick={onClick}>
        <StyledReloadIcon />
        <ScreenReaderOnly>Seite neu laden</ScreenReaderOnly>
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  color: inherit;
  display: flex;
  border-radius: 50%;
  background-color: rgba(18, 18, 18, 0.6);
`;

const StyledReloadIcon = styled(GoSync)`
  height: 40px;
  width: 40px;
`;
