import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

import { ReactComponent as WatchaHeader } from '../assets/images/header/watcha.svg';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <h1>
          <ScreenReaderOnly>Watcha</ScreenReaderOnly>
        </h1>
        <WatchaHeader />
      </StyledNavLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0px;
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  width: 100vw;

  h1 {
    margin: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
