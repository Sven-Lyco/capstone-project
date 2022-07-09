import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultPoster from '../assets/images/poster.png';
import Poster from './Poster';

export default function PosterList({ list, listName }) {
  return (
    <>
      {listName && <ListHeader>{listName}</ListHeader>}
      <List role="list" listLength={list.length}>
        {list.map(({ name, title, poster_path, id }) => (
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
