import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as WatchaHeader } from '../assets/images/header/watcha_header.svg';

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
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: var(--color-black);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;

  h1 {
    margin: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
