import styled from 'styled-components';
import defaultPoster from '../assets/images/profile.png';

export default function PosterActor({ src = defaultPoster, alt = '' }) {
  return (
    <StyledImage src={src} alt={alt} width="300" height="450" loading="lazy" />
  );
}

const StyledImage = styled.img`
  display: flex;
  width: 120px;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
`;
