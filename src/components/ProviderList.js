import styled from 'styled-components';
import ProviderPoster from './ProviderPoster';
import defaultPoster from '../assets/images/provider.png';

export default function ProviderList({ providerList }) {
  const { buy: buyProviders, flatrate: flatrateProviders, link } = providerList;

  return (
    <>
      <ListHeader>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to The Movie Database"
        >
          zu sehen auf:
        </a>
      </ListHeader>
      {flatrateProviders ? (
        <List role="list">
          {flatrateProviders?.map(
            ({ provider_name, logo_path, provider_id }) => (
              <li key={provider_id}>
                <ProviderPoster
                  src={
                    logo_path
                      ? `https://image.tmdb.org/t/p/original${logo_path}`
                      : defaultPoster
                  }
                  alt={provider_name}
                />
              </li>
            )
          )}
        </List>
      ) : (
        <List role="list">
          {buyProviders?.map(({ provider_name, logo_path, provider_id }) => (
            <li key={provider_id}>
              <ProviderPoster
                src={
                  logo_path
                    ? `https://image.tmdb.org/t/p/original${logo_path}`
                    : defaultPoster
                }
                alt={provider_name}
              />
            </li>
          ))}
        </List>
      )}
    </>
  );
}

const ListHeader = styled.h2`
  margin: 10px 0 0 20px;
  font-size: large;

  a {
    color: inherit;
  }
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 20px 20px;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid var(--color-dark-gray);

  li {
    padding: 0;
    margin: 0;
  }
`;
