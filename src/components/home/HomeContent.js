import React from "react";
import styled from "styled-components";

const HomeContent = (props) => {
  const { history } = props;
  return (
    <>
      <Title>
        <div>
          1분만에 나만의 여행 계획표 받고
          <br />
          당일치기 여행 지금 바로 떠나자!
        </div>
        <div>여행 계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해</div>
      </Title>
      {/* <Button mobileWidth="90%" mobileHeight="52px"> */}
      <StartBtn
        onClick={() => {
          history.push("/option01");
        }}
      >
        시작하기
      </StartBtn>
    </>
  );
};

const Title = styled.div`
  text-align: center;

  & div:first-child {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 67px;
    color: #fff;
  }
  & div:nth-child(2) {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 26px 0px 95px 0px;
    color: #1dc6d1;
  }

  @media screen and (max-width: 768px) {
    & {
      text-align: left;
      margin: 15vh 0 0 5vw;

      & div:first-child {
        font-size: 3.2rem;
        line-height: 43px;
        width: 70vw;
      }

      & div:nth-child(2) {
        font-size: 1.8rem;
        line-height: 25px;
        width: 68vw;
      }
    }
  }
`;

const StartBtn = styled.button`
  width: 256px;
  height: 74px;
  border: none;
  border-radius: 125px;
  background-color: var(--main-color);
  font-size: 28px;
  color: var(--white);

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    & {
      margin: 0 auto;
      width: 86vw;
      height: 7vh;
      position: absolute;
      bottom: 14vh;
      left: 0;
      right: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export default HomeContent;
