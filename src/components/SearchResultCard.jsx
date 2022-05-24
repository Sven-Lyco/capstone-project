import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Poster from '../components/Poster';

export default function SearchResultCard({
  id,
  name,
  title,
  posterPath,
  profilePath,
  releaseDate,
  firstAirDate,
  mediaType,
}) {
  const date = releaseDate ? releaseDate : firstAirDate;

  return (
    <>
      {mediaType !== 'person' && (
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
            {date && <p>{date.substr(0, 4)}</p>}
            <p>{mediaType === 'movie' ? 'Film' : 'Serie'}</p>
          </TextBox>
        </StyledLink>
      )}
      {mediaType === 'person' && (
        <StyledLink to={`/person/${id}`}>
          <Poster
            src={
              profilePath
                ? `https://image.tmdb.org/t/p/w300${profilePath}`
                : require('../assets/images/profile.png')
            }
            alt={name}
          />
          <TextBox>
            <span>{name}</span>
            <p>Schauspieler:in</p>
          </TextBox>
        </StyledLink>
      )}
    </>
  );
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;

  span {
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    font-size: medium;
    font-style: italic;
    margin: 0;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;
