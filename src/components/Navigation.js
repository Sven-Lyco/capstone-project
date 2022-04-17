import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SeriesIcon } from '../assets/icons/series_icon.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search_icon.svg';
import { ReactComponent as ListIcon } from '../assets/icons/watchlist_icon.svg';
import { ReactComponent as InfoIcon } from '../assets/icons/info_icon.svg';

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link to="/serien">
        <SeriesIcon />
        <span>Serien</span>
      </Link>
      <Link to="/filme">
        <MovieIcon />
        <span>Filme</span>
      </Link>
      <Link to="/suche">
        <SearchIcon />
        <span>Suche</span>
      </Link>
      <Link to="/watchlist">
        <ListIcon />
        <span>Watchlist</span>
      </Link>
      <Link to="/info">
        <InfoIcon />
        <span>Info</span>
      </Link>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 20px;
  border-top: 1px solid var(--border-color);
  background-color: var(--color-black);
  position: fixed;
  bottom: 0;
`;

const Link = styled(NavLink)`
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
