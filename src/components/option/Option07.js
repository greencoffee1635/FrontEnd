import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";

// components

function Option07(props) {
  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>7/7</Number>
          <Question>여행 취향을 알려주세요</Question>
        </Box>

        <div style={{ marginTop: "30px" }}>
          <Title>여행 스타일</Title>

          <div style={{ margin: "15px 0px 0px 5px" }}>
            <PickButton>여유롭고 느긋한 여행</PickButton>
            <PickButton>스케줄 알찬 여행</PickButton>      
          </div>
        </div>

        <Line/>


        <div>
          <Title>여행 테마</Title>
          <div style={{ margin: "15px 0px 0px 5px" }}>
            <PickButton>자연과 함께 힐링 여행</PickButton>
            <PickButton>먹방 여행</PickButton>
            <PickButton>문화·예술을 향유하는 교양 여행</PickButton>
            <PickButton>역사 탐방 여행</PickButton>
            <PickButton>역동적인 액티비티 여행</PickButton>
          </div>
        </div>


        <NextButton
          onClick={() => {
            props.history.push("/Option02");
          }}
        >
          입력완료!
        </NextButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 560px;
  // border: 1px solid black;
`;

const Box = styled.div``;

const Number = styled.p`
  font-size: 21px;
  font-weight: bold;
  color: #bbbbbb;
  margin: 10px auto;
`;

const Question = styled.p`
  font-weight: bolder;
  font-size: 25px;
  width: 448px;
  height: 60px;
  // border: 1px solid black;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #909090;
  margin: 5px;
`;

const PickButton = styled.button`
  width: auto;
  min-width: 10px;
  height: 50px;
  margin: 5px;
  padding: 0px 21px;
  font-size: 17px;
  font-weight: bold;
  color: #bbbbbb;
  background-color: #f2f2f2;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 198, 209, 0.3);
    color: #1dc6d1;
  }
  &:focus {
    background-color: #1dc6d1;
    color: #fff;
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 30px auto;
`;

const NextButton = styled.button`
  margin: 80px auto;
  width: 300px;
  height: 55px;
  border: none;
  border-radius: 30px;
  background-color: #1dc6d1;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: block;
  // margin: auto;
  bottom: 0;
`;

export default Option07;
