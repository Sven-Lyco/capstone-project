import styled from 'styled-components';
import Header from '../components/Header';
import SearchResultCard from '../components/SearchResultCard';
import Navigation from '../components/Navigation';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import LoadingSpinner from '../components/LoadingSpinner';
import { ReactComponent as SearchIcon } from '../assets/icons/search_icon.svg';
import useSearch from '../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

export default function SearchPage({ isAdult }) {
  const { isLoading, results, handleSearch } = useSearch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header />
      {!isAdult ? navigate('../child') : navigate('../suche')}
      <SearchWrapper>
        <label htmlFor="search">
          <ScreenReaderOnly>Suche</ScreenReaderOnly>
        </label>
        <input
          id="search"
          name="search"
          placeholder="Star Wars, Suits,..."
          type="text"
          onChange={event => handleSearch(event)}
          onKeyDown={event =>
            (event.key === 'Enter' || event.key === 'Escape') &&
            event.target.blur()
          }
          required
        />
      </SearchWrapper>
      {isLoading && <LoadingSpinner />}
      {results.length !== 0 ? (
        <StyledList>
          {results
            .filter(result => result.media_type !== 'person')
            .map(
              ({
                id,
                name,
                title,
                poster_path,
                release_date,
                first_air_date,
                media_type,
              }) => (
                <StyledListItem key={id}>
                  <SearchResultCard
                    id={id}
                    name={name}
                    title={title}
                    posterPath={poster_path}
                    releaseDate={release_date}
                    firstAirDate={first_air_date}
                    mediaType={media_type}
                  />
                </StyledListItem>
              )
            )}
        </StyledList>
      ) : (
        <InfoBox>
          <SearchIcon />
          <span>Bitte gib einen Suchbegriff ein</span>
          <span>oder ändere deine Suche</span>
        </InfoBox>
      )}
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 60px 0 68px;
`;

const SearchWrapper = styled.div`
  background-color: var(--color-black);
  border-bottom: 1px solid var(--border-color);
  padding: 15px;
  position: sticky;
  top: 59px;
  input {
    padding: 10px 8px;
    width: 100%;
    color: inherit;
    border-radius: var(--border-radius);
    border: transparent;
    background-color: var(--color-dark-gray);
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0 25px;
  margin: 0;
  li {
    border-bottom: 1px solid var(--border-color);
    margin: 20px 0;
    padding: 10px 0;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  font-size: larger;
  color: inherit;
  text-decoration: none;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 60vh;
  span {
    text-align: center;
  }
`;
