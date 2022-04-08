import styled from 'styled-components';

export default function ButtonSeason({
  name,
  onClick,
  isActive,
  ...buttonProps
}) {
  return (
    <StyledButton {...buttonProps} onClick={onClick} isActive={isActive}>
      {name}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  white-space: nowrap;
  padding: 5px;
  border: 2px solid var(--color-light-gray);
  border-radius: var(--border-radius);
  font-size: large;
  color: ${({ isActive }) => (isActive ? `var(--color-black)` : `inherit`)};
  background-color: ${({ isActive }) =>
    isActive ? `var(--color-light-gray)` : `transparent`};
`;
