import styled from 'styled-components';
import defaultPoster from '../assets/images/provider.png';

export default function Poster({ src = defaultPoster, alt = '' }) {
  return <Image src={src} alt={alt} width="100" height="100" loading="lazy" />;
}

const Image = styled.img`
  display: flex;
  width: 60px;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
`;
