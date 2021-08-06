import React, { useState } from "react";
import styled from "styled-components";

function ToggleButton() {
  const [isToggleOn, setToggleOn] = useState(false);

  return (
    <Switch>
      <Input
        type="checkbox"
        checked={isToggleOn}
        onChange={() => setToggleOn(!isToggleOn)}
      />
      <Slider />
    </Switch>
  );
}

export default ToggleButton;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    border-radius: 50%;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .1s;
  }
`;

const Input = styled.input`
    &:checked + ${Slider} {
      background-color: #1DC6D1;
    }
    &:focus + .slider {
     box-shadow: 0 0 1px #2196F3;
    }
    &:checked + ${Slider}:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
`;
