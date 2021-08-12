import React from "react";
import styled from "styled-components";

const SaveButton = (props) => {
  const { tourList } = props;

  return (
    <>
      <Button kind="reset">다시하기</Button>
      <Button
        kind="save"
        onClick={() => {
          console.log("저장하기", tourList);
        }}
      >
        저장하기
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 248px;
  height: 69px;
  border: none;
  border-radius: 125px;
  ${(props) =>
    props.kind === "save"
      ? "background-color: #1dc6d1;"
      : "background-color: #ccc;"}
  ${(props) => (props.kind === "save" ? "color: #fff;" : "color: #454545;")}
  font-size: 24px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export default SaveButton;
