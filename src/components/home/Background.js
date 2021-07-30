import React from "react";
import styled from "styled-components";

// image
import bgImg from "../../images/background_img.jpg";

function Background(props) {
  return (
    <>
      <BackgroundImg />
    </>
  );
}

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
