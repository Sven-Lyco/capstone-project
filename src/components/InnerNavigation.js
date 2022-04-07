import styled from 'styled-components';

export default function InnerNavigation({
  showDetails,
  showSeasons,
  handleNavigation,
}) {
  return (
    <Wrapper>
      <StyledDetailsButton showDetails={showDetails} onClick={handleNavigation}>
        Details
      </StyledDetailsButton>
      <StyledSeasonButton showSeasons={showSeasons} onClick={handleNavigation}>
        Staffeln
      </StyledSeasonButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 0 20px;
  gap: 20px;
`;

const StyledDetailsButton = styled.button`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: large;
  color: inherit;
  background-color: ${({ showDetails }) =>
    showDetails ? `var(--border-color)` : `transparent`};
`;

const StyledSeasonButton = styled.button`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: large;
  color: inherit;
  background-color: ${({ showSeasons }) =>
    showSeasons ? `var(--border-color)` : `transparent`};
`;
