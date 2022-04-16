import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../assets/icons/plus_icon.svg';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function AddSeriesButton({
  onHandleAddSeries,
  id,
  name,
  posterPath,
  ...buttonProps
}) {
  return (
    <StyledButton
      {...buttonProps}
      onClick={() => onHandleAddSeries(id, name, posterPath)}
    >
      <StyledPlusIcon />
      <ScreenReaderOnly>zur Watchlist hinzufügen</ScreenReaderOnly>
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
  color: var(--color-orange);
  font-size: large;
  border: none;
  cursor: pointer;
`;

const StyledPlusIcon = styled(PlusIcon)`
  background-color: rgba(18, 18, 18, 0.6);
  border-radius: 50%;
`;
