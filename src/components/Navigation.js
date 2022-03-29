import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ScreenReaderOnly from './ScreenReaderOnly';

import { ReactComponent as SeriesIcon } from '../assets/icons/series_icon.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie_icon.svg';

export default function Navigation() {
  return (
    <StyledNavigation>
      <LinkStyled to="/Serien">
        <SeriesIcon />
        <ScreenReaderOnly>Serien</ScreenReaderOnly>
      </LinkStyled>
      <LinkStyled to="/Filme">
        <MovieIcon />
        <ScreenReaderOnly>Filme</ScreenReaderOnly>
      </LinkStyled>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-color);
  position: fixed;
  bottom: 0;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
`;
