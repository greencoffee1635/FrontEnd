import React from "react";
import styled from "styled-components";

function Container(props) {
  const { justifyContent, children } = props;
  const styles = { justifyContent };

  return (
    <>
      <ContainerBox {...styles}>{children}</ContainerBox>
      {/* <div className="container">{children}</div> */}
    </>
  );
}

Container.defaultProps = {
  justifyContent: null,
};

const ContainerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: column;
  align-items: center;
`;

export default Container;
