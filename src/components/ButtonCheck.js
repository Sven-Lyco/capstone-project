import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as CheckIcon } from '../assets/icons/check_icon.svg';

export default function ButtonCheck({ onClick, isActive, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps} onClick={onClick} isActive={isActive}>
      <StyledIcon />
      <ScreenReaderOnly>{isActive ? 'gesehen' : 'ungesehen'}</ScreenReaderOnly>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  margin-right: 12px;
  background-color: transparent;
  color: ${({ isActive }) =>
    isActive ? 'var(--color-green)' : 'var(--color-light-gray)'};
  border: none;
  cursor: pointer;
`;

const StyledIcon = styled(CheckIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
