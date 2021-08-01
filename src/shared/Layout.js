import React from "react";
import styled from "styled-components";

function Layout(props) {
  return (
    <>
      <Container page={props.page}>{props.children}</Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => (props.page === "main" ? "justify-content: center;" : "")}
  align-items: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default Container;
