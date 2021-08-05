import React from "react";
import styled from "styled-components";

const DetailTitle = (props) => {
  const { tourList } = props;

  return (
    <>
      <Title>
        {/* Hello
        <br /> */}
        {tourList.title}
      </Title>
    </>
  );
};

const Title = styled.div`
  /* font-size: 7.5rem; */
  font-size: 4.5rem;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

export default DetailTitle;
