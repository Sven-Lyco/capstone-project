import styled from 'styled-components';
import ProviderPoster from './ProviderPoster';
import defaultPoster from '../assets/images/provider.png';

export default function ProviderList({ providerList }) {
  const { buy: buyProviders, flatrate: flatrateProviders, link } = providerList;
  return (
    <>
      <ListHeader>
        <a href={link} target="_blank" rel="noopener noreferrer">
          zu sehen auf:
        </a>
      </ListHeader>
      {!flatrateProviders && (
        <StyledList role="list" listLength={providerList?.length}>
          {buyProviders?.map(({ provider_name, logo_path, id }) => (
            <li key={id}>
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
        </StyledList>
      )}
      {!buyProviders && (
        <StyledList role="list" listLength={providerList?.length}>
          {flatrateProviders?.map(({ provider_name, logo_path, id }) => (
            <li key={id}>
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
        </StyledList>
      )}
    </>
  );
}

const ListHeader = styled.h2`
  margin: 10px 20px;
  font-size: x-large;

  a {
    color: inherit;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 10px 20px;
  margin: 0;
  display: grid;
  grid-template-columns: ${({ listLength }) =>
    listLength ? `repeat(${listLength}, auto)` : `repeat(20, auto)`};
  grid-template-rows: 1fr;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    padding: 0;
    margin: 0;
  }
`;
