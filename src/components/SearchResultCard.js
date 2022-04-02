import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Poster from '../components/Poster';

export default function SearchResultCard({
  id,
  name,
  title,
  posterPath,
  releaseDate,
  firstAirDate,
  mediaType,
}) {
  return (
    <>
      <StyledLink to={name ? `/serie/${id}` : `/film/${id}`}>
        <Poster
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : require('../assets/images/poster.png')
          }
          alt={name ? `${name}` : `${title}`}
        />

        <TextBox>
          <span>{name ? `${name}` : `${title}`}</span>
          <span>
            {releaseDate
              ? `${
                  releaseDate
                    ? releaseDate.substr(0, 4)
                    : 'kein Release Datum vorhanden'
                }`
              : `${
                  firstAirDate
                    ? firstAirDate.substr(0, 4)
                    : 'kein Release Datum vorhanden'
                }`}{' '}
            - {mediaType === 'movie' ? 'Film' : 'Serie'}
          </span>
        </TextBox>
      </StyledLink>
    </>
  );
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  p {
    font-style: italic;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;
