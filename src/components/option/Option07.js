import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";


// components

function Option07(props) {
  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>7/7</Number>
          <Question>여행 취향을 알려주세요</Question>
        </Box>

        <div style={{marginTop: "30px"}}>
          <Title>여행 스타일</Title>
          
          <div style={{margin: "15px 0px 0px 5px"}}>
            <PickButton>자연</PickButton>
            <PickButton>역사</PickButton>
            <PickButton>휴양</PickButton>
            <PickButton>액티비티</PickButton>
          </div>
          <div style={{marginLeft: "5px"}}>
            <PickButton>SNS 핫플레이스</PickButton>
            <PickButton>문화·예술</PickButton>
            <PickButton>먹방</PickButton>
          </div>
        
          <Line/>

          <Title>음식</Title>
          <div style={{margin: "15px 0px 0px 5px"}}>
            <PickButton>한식</PickButton>
            <PickButton>양식</PickButton>
            <PickButton>일식</PickButton>
            <PickButton>중식</PickButton>
            <PickButton>분식</PickButton>
          </div>
          <div style={{marginLeft: "5px"}}>
            <PickButton>아시안</PickButton>
            <PickButton>디저트</PickButton>
            <PickButton>안주</PickButton>
            <PickButton>패스트푸드</PickButton>
          </div>
        </div>

        <NextButton
          onClick={() => {props.history.push("/Option02");}}
        >
          입력완료!
        </NextButton>

      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 28.6vw;
  height: 75%;
  // border: 1px solid black;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const Box = styled.div`
`;

const Number = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #BBBBBB;
  margin: 10px auto;
`;

const Question = styled.p`
  font-weight: bolder;
  font-size: 2.5rem;
  width: 22vw;
  height: 8vh;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #909090;
  margin: 5px;
`;

const PickButton = styled.button`
  width : auto;
  min-width : 5vw;
  height: 6.4vh;
  margin: 5px;
  padding:  0px 21px;
  font-size: 1.7rem;
  font-weight: bold;
  color: #BBBBBB;
  background-color: #F2F2F2;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover{
    background-color: rgba(29,198,209,0.3);
    color: #1DC6D1;
    }
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 30px auto;
`;

const NextButton = styled.button`
  margin: 61px auto ;
  width: 22vw;
  height: 7.5vh;
  border: none;
  border-radius: 30px;
  background-color: #1DC6D1;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  display: block;
  // margin: auto;
`;


export default Option07;