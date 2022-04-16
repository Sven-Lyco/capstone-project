import styled from 'styled-components';
import PosterActor from './PosterActor';
import defaultPoster from '../assets/images/profile.png';

export default function CastList({ castList, listName }) {
  return (
    <>
      <ListHeader>{listName ? listName : ''}</ListHeader>
      {castList?.length >= 1 ? (
        <StyledList role="list" listLength={castList?.length}>
          {castList?.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <ImageBox>
                <PosterActor
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultPoster
                  }
                  alt={name}
                />
                <ActorName>{name}</ActorName>
                <CharacterName>{character}</CharacterName>
              </ImageBox>
            </li>
          ))}
        </StyledList>
      ) : (
        <>
          <p>Es sind leider keine Hauptdarsteller verfügbar</p>
        </>
      )}
    </>
  );
}

const ListHeader = styled.h3`
  margin-top: 10px;
  font-size: x-large;
`;

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${({ listLength }) =>
    listLength ? `repeat(${listLength}, auto)` : `repeat(20, auto)`};
  grid-template-rows: 1fr;
  padding: 0 20px;
  margin: 0 -20px;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    padding: 0;
    margin: 0;
  }
`;

const ImageBox = styled.div`
  position: relative;
`;

const ActorName = styled.p`
  margin: 0;
  padding: 0;
  font-size: medium;
  color: var(--color-white);
`;

const CharacterName = styled.p`
  margin: 0;
  padding: 0;
  font-size: small;
  font-style: italic;
  color: var(--color-light-gray);
`;
