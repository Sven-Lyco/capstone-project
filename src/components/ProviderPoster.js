import styled from 'styled-components';

export default function Poster({
  src = require('../assets/images/provider.png'),
  alt = 'ProviderPoster',
}) {
  return (
    <>
      <StyledImage
        src={src}
        alt={alt}
        width="100"
        height="100"
        loading="lazy"
      />
    </>
  );
}

const StyledImage = styled.img`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: flex;
  width: 50px;
  height: auto;
`;
