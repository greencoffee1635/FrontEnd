import React from "react";
// import styled from "styled-components";

// css
import "../css/button.scss";

function Button(props) {
  const {
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    fontSize,
    fontWeight,
    children,
    color,
    margin,
  } = props;
  const styles = {
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    fontSize,
    fontWeight,
    color,
    margin,
  };

  return (
    <>
      {/* <Btn {...styles}>{children}</Btn> */}
      <button className="button">{props.children}</button>
    </>
  );
}

Button.defaultProps = {
  width: "256px",
  height: "74px",
  border: "none",
  borderRadius: "125px",
  backgroundColor: "#1dc6d1",
  fontSize: "28px",
  color: "#fff",
  margin: false,
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: 600;
  cursor: pointer;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
