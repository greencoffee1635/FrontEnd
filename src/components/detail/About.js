import React from "react";
import styled from "styled-components";

const About = (props) => {
  return (
    <>
      <AboutBox>
        <AboutTitle>
          <h1>About</h1>
          <span>거리두기 3단계</span>
        </AboutTitle>
        <p>
          지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든 문화
          유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를 비롯해
          허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난 건축미를 자랑하는
          불국사 석굴암까지 어느 하나 빼놓을 수 없다. 경주 여행의 기록을 남기고
          싶다면 스탬프 투어를 이용해보는 것도 좋다. 16곳의 명소를 탐방할 때마다
          찍히는 도장 모으는 재미가 쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가
          가능하다.{" "}
        </p>
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
