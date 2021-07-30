import React from "react";
import styled from "styled-components";

// image
import bgImg from "../../images/background_img.jpg";

function Background(props) {
  return (
    <>
      <BackgroundColor />
      <BackgroundImg />
    </>
  );
}

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`;

const BackgroundImg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Background;
