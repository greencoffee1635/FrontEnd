import React, { useState } from "react";
import styled from "styled-components";

function ToggleButton ({ isOn, handleToggle, onColor }) {

    // const 

    return (
      <>
        <SwitchCheckbox
            checked={isOn}
            onChange={handleToggle}
            id={`react-switch-new`}
            type="checkbox"
        />
        <SwitchLabel
            style={{ background: isOn && onColor }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
          <SwitchButton/>
        </SwitchLabel>
      </>
    );
  };
  
export default ToggleButton;

const SwitchCheckbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden
`;
  
const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 80px;
    height: 38px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`;
  
const SwitchButton = styled.span`
    // content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 33px;
    height: 33px;
    border-radius: 35px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;
  

// //초기값 false 
//   .react-switch-checkbox: checked + .react-switch-label .react-switch-button {
//     left: calc(100% - 2px);
//     transform: translateX(-100%);
//   }
  
//   .react-switch-label:active .react-switch-button {
//     width: 60px;
//   }