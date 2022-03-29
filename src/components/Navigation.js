import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ScreenReaderOnly from './ScreenReaderOnly';

import { ReactComponent as SeriesIcon } from '../assets/icons/series_icon.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie_icon.svg';

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink to="/serien">
        <StyledSeriesIcon />
        <ScreenReaderOnly>Serien</ScreenReaderOnly>
      </StyledLink>
      <StyledLink to="/filme">
        <StyledMovieIcon />
        <ScreenReaderOnly>Filme</ScreenReaderOnly>
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100vw;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid var(--border-color);
  position: fixed;
  bottom: 0;
`;

const StyledSeriesIcon = styled(SeriesIcon)`
  &.active {
    color: var(--color-orange);
  }
`;

const StyledMovieIcon = styled(MovieIcon)`
  &.active {
    color: var(--color-orange);
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  color: inherit;

  &.active {
    color: var(--color-orange);
  }
`;
