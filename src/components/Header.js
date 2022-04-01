import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';
import { ReactComponent as WatchedHeader } from '../assets/images/header/watched.svg';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <h1>
          <ScreenReaderOnly>Watcha</ScreenReaderOnly>
        </h1>
        <WatchedHeader />
      </StyledNavLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 768px;
  h1 {
    margin: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
