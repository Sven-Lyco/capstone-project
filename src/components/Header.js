import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Header({
  title = 'Watcha',
  src = require('../assets/images/header/suche.svg'),
  alt = 'suche',
}) {
  return (
    <StyledHeader>
      <h1>
        <ScreenReaderOnly>{title}</ScreenReaderOnly>
      </h1>
      <img src={src} alt={alt} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 10px 0px;
  border-bottom: 1px solid var(--border-color);
`;
