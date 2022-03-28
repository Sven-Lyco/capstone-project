import styled from 'styled-components';

export default function Poster({
  src = require('../assets/images/poster.png'),
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
