import styled from 'styled-components';

export default function EpisodeCard({ episode }) {
  const { name, episode_number, still_path } = episode;

  return (
    <ListItem>
      <ImageBox stillPath={still_path} />
      <section>
        <p>Episode: {episode_number}</p>
        <span>{name}</span>
      </section>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  padding: 0px;
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
  width: 70px;
  height: auto;
  background: ${({ stillPath }) =>
      stillPath ? `url(https://image.tmdb.org/t/p/original${stillPath})` : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
`;
