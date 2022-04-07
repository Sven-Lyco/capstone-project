import styled from 'styled-components';

export default function ButtonSeason({ name, onClick, isActive }) {
  return (
    <StyledButton onClick={onClick} isActive={isActive}>
      {name}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  width: 100%;
  padding: 5px;
  border: 2px solid var(--color-blue);
  border-radius: var(--border-radius);
  font-size: larger;
  color: ${({ isActive }) => (isActive ? `var(--color-black)` : `inherit`)};
  background-color: ${({ isActive }) =>
    isActive ? `var(--color-blue)` : `transparent`};
`;
