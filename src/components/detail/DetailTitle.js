import React from "react";
import styled from "styled-components";

const DetailTitle = (props) => {
  return (
    <>
      <Title>
        Hello
        <br />
        Gyeungju!
      </Title>
    </>
  );
};

const Title = styled.div`
  font-size: 7.5rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;

export default DetailTitle;
