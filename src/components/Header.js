import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Header({
  title = 'Watcha',
  src = require('../assets/images/header/suche.svg'),
  alt = 'suche',
}) {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <h1>
          <ScreenReaderOnly>{title}</ScreenReaderOnly>
        </h1>
        <img src={src} alt={alt} />
      </StyledNavLink>
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

  h1 {
    margin: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
