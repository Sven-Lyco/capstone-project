import styled from 'styled-components';
import PAGES from '../assets/pages';

export default function InnerNavigation({ currentPage, handleNavigation }) {
  return (
    <Wrapper>
      <DetailsButton
        currentPage={currentPage}
        onClick={() => handleNavigation('details')}
      >
        Details
      </DetailsButton>
      <SeasonButton
        currentPage={currentPage}
        onClick={() => handleNavigation('seasons')}
      >
        Staffeln
      </SeasonButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  padding: 0 20px;
  gap: 20px;
`;

const DetailsButton = styled.button`
  width: 100%;
  padding: 3px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: large;
  color: inherit;
  background-color: ${({ currentPage }) =>
    currentPage === PAGES.DETAILS ? `var(--border-color)` : `transparent`};
`;

const SeasonButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: large;
  color: inherit;
  background-color: ${({ currentPage }) =>
    currentPage === PAGES.SEASONS ? `var(--border-color)` : `transparent`};
`;
