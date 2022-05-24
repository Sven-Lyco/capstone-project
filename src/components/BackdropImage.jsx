import styled from 'styled-components';

export default styled.div`
  z-index: -1;
  position: relative;
  @media (min-width: 576px) {
    min-height: ${({ backdropPath }) => (backdropPath ? `360px` : `140px`)};
  }
  min-height: ${({ backdropPath }) => (backdropPath ? `300px` : `140px`)};
  height: 100%;
  background: ${({ backdropPath }) =>
      backdropPath
        ? `url(https://image.tmdb.org/t/p/w1280${backdropPath})`
        : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -60px;
  box-shadow: inset 0 -65px 50px 0 var(--color-black);
`;
