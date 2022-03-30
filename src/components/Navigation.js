import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as SeriesIcon } from '../assets/icons/series_icon.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie_icon.svg';

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink to="/serien">
        <SeriesIcon />
        <span>Serien</span>
      </StyledLink>
      <StyledLink to="/filme">
        <MovieIcon />
        <span>Filme</span>
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
  background-color: var(--color-black);
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  color: inherit;
  text-decoration: none;

  span {
    font-size: small;
  }

  &.active {
    color: var(--color-orange);
  }
`;
