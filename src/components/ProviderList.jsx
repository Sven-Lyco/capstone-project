import styled from 'styled-components';
import defaultPoster from '../assets/images/provider.png';
import ProviderPoster from './ProviderPoster';

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
          {flatrateProviders.map(
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
  border-bottom: 1px solid var(--color-dark-gray);
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  scroll-padding-left: 20px;

  li {
    padding: 0;
    margin: 0;
    scroll-snap-align: start;
  }
`;
