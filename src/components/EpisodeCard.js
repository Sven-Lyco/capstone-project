import styled from 'styled-components';

export default function EpisodeCard({ episode }) {
  const { name, episode_number } = episode;

  return (
    <Wrapper>
      <p>Episode :{episode_number}</p>
      <span>{name}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5px;
  margin: 5px 20px;
  border-radius: var(--border-radius);
  background-color: var(--color-dark-gray);

  p {
    padding: 0;
    margin: 0;
  }

  span {
    color: var(--color-light-gray);
    font-size: medium;
    font-style: italic;
  }
`;
