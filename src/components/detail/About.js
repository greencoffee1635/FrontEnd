import React from "react";
import styled from "styled-components";

const About = (props) => {
  const { tourList } = props;
  return (
    <>
      <AboutBox>
        <AboutTitle>
          <h1>About</h1>
          <span>거리두기 3단계</span>
        </AboutTitle>
        <p>{tourList && tourList.overview}</p>
        {/* <p>{tourList[0] && tourList[0].overview}</p> */}
        <HashTag>
          <span>#황리단길</span>
          <span>#황남빵</span>
          <span>#찰보리빵</span>
          <span>#유적지</span>
        </HashTag>
      </AboutBox>
    </>
  );
};

const AboutBox = styled.div`
  width: 50%;

  & p {
    height: 210px;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
    overflow: auto;
  }
`;

const AboutTitle = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;

  & h1 {
    font-size: 55px;
    font-weight: 600;
    margin-right: 17px;
  }

  & span {
    border: 2px solid #fc6b6b;
    border-radius: 50px;
    width: 141px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #fc6b6b;
  }
`;

const HashTag = styled.div`
  margin-top: 31px;
  & span {
    color: #1dc6d1;
    font-size: 20px;
    margin-right: 20px;
  }
`;

export default About;
