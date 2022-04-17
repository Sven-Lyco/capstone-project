import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import defaultPoster from '../assets/images/poster.png';

export default function PosterList({ list, listName }) {
  return (
    <>
      <ListHeader>{listName ? listName : ''}</ListHeader>
      <List role="list" listLength={list?.length}>
        {list?.map(({ name, title, poster_path, id }) => (
          <li key={id}>
            <Link to={name ? `/serie/${id}` : `/film/${id}`}>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : defaultPoster
                }
                alt={name ? `${name}` : `${title}`}
              />
            </Link>
          </li>
        ))}
      </List>
    </>
  );
}

const ListHeader = styled.h2`
  margin: 10px 0 0 20px;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${({ listLength }) =>
    listLength ? `repeat(${listLength}, auto)` : `repeat(20, auto)`};
  grid-template-rows: 1fr;
  padding: 20px;
  margin: 0;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    padding: 0;
    margin: 0;
  }
`;
