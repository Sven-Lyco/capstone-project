import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/search_icon.svg';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import SearchResultCard from '../components/SearchResultCard';
import useSearch from '../hooks/useSearch';

export default function SearchPage() {
  const { results, handleSearch } = useSearch();
  return (
    <Wrapper>
      <Header />
      <SearchWrapper>
        <label htmlFor="search">
          <ScreenReaderOnly>Suche</ScreenReaderOnly>
        </label>
        <input
          id="search"
          name="search"
          placeholder="z.B.: Star Wars, Suits,..."
          type="text"
          onChange={event => handleSearch(event)}
          onKeyDown={event =>
            (event.key === 'Enter' || event.key === 'Escape') &&
            event.target.blur()
          }
          autoComplete="off"
        />
      </SearchWrapper>
      {results === undefined && (
        <InfoBox>
          <SearchIcon />
          <span>Bitte gib einen Suchbegriff ein</span>
          <span>oder ändere deine Suche</span>
        </InfoBox>
      )}
      {results?.length !== 0 ? (
        <List role="list">
          {results?.map(
            ({
              id,
              name,
              title,
              poster_path,
              profile_path,
              release_date,
              first_air_date,
              media_type,
            }) => (
              <ListItem key={id}>
                <SearchResultCard
                  id={id}
                  name={name}
                  title={title}
                  posterPath={poster_path}
                  profilePath={profile_path}
                  releaseDate={release_date}
                  firstAirDate={first_air_date}
                  mediaType={media_type}
                />
              </ListItem>
            )
          )}
        </List>
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
  margin: 60px 0 85px;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;

const SearchWrapper = styled.div`
  background-color: var(--color-black);
  border-bottom: 1px solid var(--border-color);
  padding: 15px;
  position: sticky;
  top: 58px;
  input {
    padding: 10px 12px;
    width: 100%;
    color: inherit;
    border-radius: 22px;
    border: transparent;
    background-color: var(--color-dark-gray);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0 25px;
  margin: 0;
  li {
    border-bottom: 1px solid var(--border-color);
    margin: 20px 0;
    padding: 10px 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  font-size: larger;
  color: inherit;
  text-decoration: none;
`;

const InfoBox = styled.section`
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
