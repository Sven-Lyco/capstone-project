import styled from 'styled-components';

export default function PosterActor({
  src = require('../assets/images/profile.png'),
  alt = 'Poster',
}) {
  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        width="300"
        height="450"
        loading="lazy"
      />
    </>
  );
}

const StyledImage = styled.img`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: flex;
  width: 120px;
  height: auto;
`;
