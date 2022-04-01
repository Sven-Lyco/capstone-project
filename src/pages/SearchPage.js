import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Poster from '../components/Poster';
import Navigation from '../components/Navigation';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import LoadingSpinner from '../components/LoadingSpinner';

const {
  REACT_APP_API_BASE_URL_SEARCH,
  REACT_APP_API_KEY,
  REACT_APP_API_LANGUAGE,
} = process.env;

export default function SearchPage() {
  const [results, setResults] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let searchUrl = '';

  function handleSubmit(event) {
    event.preventDefault();
    async function loadData() {
      setIsLoading(true);
      try {
        const form = event.target;
        const query = form.elements.search.value;
        searchUrl = `${REACT_APP_API_BASE_URL_SEARCH}?api_key=${REACT_APP_API_KEY}&query=${query}&language=${REACT_APP_API_LANGUAGE})`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        setResults(data.results);
        form.reset();
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    loadData();
  }

  return (
    <Wrapper>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="search">
          <ScreenReaderOnly>Suche</ScreenReaderOnly>
        </label>
        <input
          id="search"
          name="search"
          placeholder="Star Wars, Shameless,..."
          type="search"
          required
        />
      </StyledForm>
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
                  <Link to={name ? `/serie/${id}` : `/film/${id}`}>
                    <Poster
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w300${poster_path}`
                          : require('../assets/images/poster.png')
                      }
                      alt={name ? `${name}` : `${title}`}
                    />
                  </Link>
                  <TextBox>
                    <span>{name ? `${name}` : `${title}`}</span>
                    <span>
                      {release_date
                        ? `${
                            release_date
                              ? release_date.substr(0, 4)
                              : 'kein Release Datum vorhanden'
                          }`
                        : `${
                            first_air_date
                              ? first_air_date.substr(0, 4)
                              : 'kein Release Datum vorhanden'
                          }`}{' '}
                      - {media_type === 'movie' ? 'Film' : 'Serie'}
                    </span>
                  </TextBox>
                </StyledListItem>
              )
            )}
        </StyledList>
      ) : (
        <InfoBox>
          <span>🕵🏼‍♀️ 🕵🏼 🕵🏻‍♂️</span>
          <span>Bitte gib ein Suchbegriff ein</span>
          <span> oder ändere deine Suche </span>
        </InfoBox>
      )}
      <Navigation />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 68px;
`;

const StyledForm = styled.form`
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
  padding: 0px 25px;
  margin: 0px;

  li {
    border-top: 1px solid var(--border-color);
    margin: 20px 0px;
    padding: 10px 0px;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  font-size: larger;
  color: inherit;
  text-decoration: none;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  p {
    font-style: italic;
  }
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
