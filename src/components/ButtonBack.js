import styled from 'styled-components';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';

export default function ButtonBack({ onClick }) {
  return (
    <Button onClick={onClick}>
      <StyledArrowBackIcon />
      <ScreenReaderOnly>Zurück</ScreenReaderOnly>
    </Button>
  );
}
const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: var(--border-radius);
`;
