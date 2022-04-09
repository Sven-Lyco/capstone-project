import styled from 'styled-components';
import PosterActor from './PosterActor';
import defaultPoster from '../assets/images/profile.png';

export default function CastList({ seriesCast, listName }) {
  return (
    <>
      <ListHeader>{listName}</ListHeader>
      <StyledList role="list">
        {seriesCast?.map(({ id, name, character, profile_path }) => (
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
    </>
  );
}

const ListHeader = styled.h3`
  margin: 10px 0px 0px 0px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin: 0px -20px;
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
