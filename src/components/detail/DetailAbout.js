import React from "react";
import styled from "styled-components";

// components
import About from "./About";
import Weather from "./Weather";

const DetailAbout = (props) => {
  return (
    <>
      <Container>
        <About />
        <Weather />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
`;

export default DetailAbout;
