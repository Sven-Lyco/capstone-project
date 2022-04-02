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
      <Link to={name ? `/serie/${id}` : `/film/${id}`}>
        <Poster
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w300${posterPath}`
              : require('../assets/images/poster.png')
          }
          alt={name ? `${name}` : `${title}`}
        />
      </Link>
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
