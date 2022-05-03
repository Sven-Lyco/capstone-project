import styled from 'styled-components';
import defaultPoster from '../assets/images/poster.png';

export default function Poster({ src = defaultPoster, alt = '', isWatched }) {
  return (
    <Image
      src={src}
      alt={alt}
      width="300"
      height="450"
      loading="lazy"
      isWatched={isWatched}
    />
  );
}

const Image = styled.img`
  display: flex;
  width: 120px;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: ${({ isWatched }) => (isWatched ? '0px 0px 4px #2bd999' : '')};
`;
