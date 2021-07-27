import React from "react";
// import styled from "styled-components";

// css
import "../css/container.scss";

function Container(props) {
  // const { justifyContent, children } = props;
  // const styles = { justifyContent };

  return (
    <>
      {/* <ContainerBox {...styles}>{children}</ContainerBox> */}
      <div className="container">{props.children}</div>
    </>
  );
}

// Container.defaultProps = {
//   justifyContent: null,
// };

// const ContainerBox = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: ${(props) => props.justifyContent};
//   flex-direction: column;
//   align-items: center;
//   @media screen and (max-width: 768px) {
//     justify-content: flex-start;
//     align-items: flex-start;
//   }
// `;

export default Container;
