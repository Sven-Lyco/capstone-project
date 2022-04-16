import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as CheckIcon } from '../assets/icons/check_icon.svg';

export default function ButtonCheckEpisode({
  id,
  handleCheckEpisode,
  isEpisodeWatched,
  ...buttonProps
}) {
  return (
    <StyledButton
      {...buttonProps}
      onClick={() => handleCheckEpisode(id)}
      isEpisodeWatched={isEpisodeWatched}
    >
      <ScreenReaderOnly>
        {isEpisodeWatched ? 'gesehen' : 'ungesehen'}
      </ScreenReaderOnly>
      <CheckIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 7px 0 auto;
  border: none;
  background-color: transparent;
  color: ${({ isEpisodeWatched }) =>
    isEpisodeWatched ? 'var(--color-green)' : 'var(--color-black)'};
  cursor: pointer;
`;
