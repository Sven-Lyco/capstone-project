import styled from 'styled-components';
import ButtonCheck from './ButtonCheck';

export default function EpisodeCard({
  episode,
  handleCheckEpisode,
  isEpisodeWatched,
}) {
  const { name, episode_number, still_path, id } = episode;

  return (
    <ListItem>
      <ImageBox stillPath={still_path} />
      <section>
        <p>Episode: {episode_number}</p>
        <span>{name}</span>
      </section>
      <ButtonWrapper>
        <ButtonCheck
          onClick={() => handleCheckEpisode(id)}
          isActive={isEpisodeWatched}
        />
      </ButtonWrapper>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  padding: 0;
  margin: 10px 20px;
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  background-color: var(--color-dark-gray);

  p {
    padding: 0;
    margin: 0;
  }

  span {
    margin: 0;
    padding: 0;
    color: var(--color-light-gray);
    font-size: 0.8rem;
    font-style: italic;
  }

  section {
    padding: 10px;
  }
`;

const ImageBox = styled.div`
  width: ${({ stillPath }) => (stillPath ? `70px` : '0px')};
  height: auto;
  background: ${({ stillPath }) =>
      stillPath ? `url(https://image.tmdb.org/t/p/w300${stillPath})` : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 7px 0 auto;
`;
