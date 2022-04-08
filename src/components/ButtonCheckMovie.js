import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as CheckIcon } from '../assets/icons/check_icon.svg';

export default function ButtonCheckMovie({
  id,
  handleCheckMovie,
  isMovieWatched,
  ...buttonProps
}) {
  return (
    <StyledButton
      {...buttonProps}
      onClick={() => handleCheckMovie(id)}
      isMovieWatched={isMovieWatched}
    >
      <StyledIcon />
      <ScreenReaderOnly>
        {isMovieWatched ? 'gesehen' : 'ungesehen'}
      </ScreenReaderOnly>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  margin-right: 12px;
  background-color: transparent;
  color: ${({ isMovieWatched }) =>
    isMovieWatched ? 'var(--color-green)' : 'var(--color-light-gray)'};
  border: none;
  cursor: pointer;
`;

const StyledIcon = styled(CheckIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
