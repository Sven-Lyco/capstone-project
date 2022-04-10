import styled from 'styled-components';
import ButtonCheckEpisode from './ButtonCheckEpisode';

export default function EpisodeCard({
  episode,
  isOnWatchlist,
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
      {isOnWatchlist && (
        <ButtonCheckEpisode
          id={id}
          handleCheckEpisode={handleCheckEpisode}
          isEpisodeWatched={isEpisodeWatched}
        />
      )}
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
      stillPath ? `url(https://image.tmdb.org/t/p/original${stillPath})` : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
`;
