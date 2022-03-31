import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Poster from './Poster';

export default function PosterList({ list, listName }) {
  return (
    <>
      <ListHeader>{listName}</ListHeader>
      <StyledList role="list">
        {list.map(({ name, title, poster_path, id }) => (
          <li key={id}>
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
          </li>
        ))}
      </StyledList>
    </>
  );
}

const ListHeader = styled.h2`
  margin: 10px 0px 0px 20px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: 1fr;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    padding: 0;
    margin: 0;
  }
`;
