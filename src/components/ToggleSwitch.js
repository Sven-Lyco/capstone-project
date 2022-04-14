import styled from 'styled-components';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckBox(event) {
    setIsChecked(event.target.checked);
  }
  console.log(isChecked);
  return (
    <>
      <CheckBoxLabel htmlFor="checkbox" />
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={event => {
          handleChangeCheckBox(event);
        }}
      />
    </>
  );
}

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  border: 1px solid #00f573;
  background: #1d273c;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #00f573;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #00f573;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      background: #1d273c;
    }
  }
`;
