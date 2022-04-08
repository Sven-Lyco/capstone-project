import styled, { css } from 'styled-components';

export default function Button({ onClick, buttonType, text, ...buttonProps }) {
  return (
    <StyledButton {...buttonProps} onClick={onClick} buttonType={buttonType}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 1em;
  align-self: center;
  height: 50px;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  ${({ buttonType }) =>
    buttonType === 'normal' &&
    css`
      background-color: var(--color-light-gray);
      color: var(--color-black);
    `}

  ${({ buttonType }) =>
    buttonType === 'neueFische' &&
    css`
      color: rgb(255, 255, 255);
      background-color: rgb(255, 90, 54);
    `}
		
  ${({ buttonType }) =>
    buttonType === 'green' &&
    css`
      color: var(--color-black);
      background-color: var(--color-green);
    `}
		
	${({ buttonType }) =>
    buttonType === 'red' &&
    css`
      color: var(--color-black);
      background-color: var(--color-red);
    `}
`;
