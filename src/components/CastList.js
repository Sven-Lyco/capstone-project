import styled from 'styled-components';
import PosterActor from './PosterActor';
import defaultPoster from '../assets/images/profile.png';

export default function CastList({ castList, listName }) {
  const listLength = castList?.length;

  return (
    <>
      <ListHeader>{listName}</ListHeader>
      {castList?.length >= 1 ? (
        <StyledList role="list" listLength={listLength}>
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
          <p>Es ist leider keine Besetzung verfügbar</p>
        </>
      )}
    </>
  );
}

const ListHeader = styled.h3`
  margin-top: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin: 0 -20px;
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

const ImageBox = styled.div`
  position: relative;
`;

const ActorName = styled.p`
  font-size: medium;
  color: var(--color-white);
  margin: 0;
  padding: 0;
`;

const CharacterName = styled.p`
  font-size: small;
  font-style: italic;
  color: var(--color-light-gray);
  margin: 0;
  padding: 0;
`;
