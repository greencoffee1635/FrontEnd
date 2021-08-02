import React from "react";
import styled from "styled-components";

const DetailTitle = (props) => {
  return (
    <>
      <Title>
        Hello
        <br />
        Gyeongju!
      </Title>
    </>
  );
};

const Title = styled.div`
  font-size: 7.5rem;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
`;

export default DetailTitle;
