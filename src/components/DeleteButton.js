import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete_icon.svg';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function DeleteButton({ onClick, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps} onClick={onClick}>
      <StyledDeleteIcon />
      <ScreenReaderOnly>von Watchlist entfernen</ScreenReaderOnly>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 0;
  background-color: transparent;
  color: var(--color-red);
  font-size: large;
  border: none;
  cursor: pointer;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  background-color: rgba(18, 18, 18, 0.6);
  border-radius: 50%;
`;
