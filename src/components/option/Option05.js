import React from "react";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";

// shared
import Header from "../../shared/Header";


// components

function Option05(props) {
  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>5/7</Number>
          <Question>여행지는 결정하셨나요?</Question>
        </Box>

        <AnswerBox>
          <AnswerButton
            onClick={() => {props.history.push("/Option06_0");}}
          >
            네! 결정했어요.
          </AnswerButton>
          <AnswerButton
            onClick={() => {props.history.push("/Option06_1");}}
          >아니요. 결정하지 못했어요.
          </AnswerButton>
        </AnswerBox>

        <PageMoveBox>
          <PastButton
            onClick={() => {props.history.push("/Option04");}}
          >
            <img src={whiteArrowLeft} alt="" width="35px"/>
          </PastButton>

          <NextButton
            onClick={() => {props.history.push("/Option06_0");}}
          >
            <div>
              <Text>
                다음으로 
                <img src={whiteArrowRight} alt="" width="40px" style={{marginTop: "-7px"}}/>
              </Text>
            </div>
          </NextButton>
        </PageMoveBox>

      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 395px;
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
  width: 394px;
  height: 60px;
  // border: 1px solid black;
`;

const AnswerBox = styled.div`
  width: 395px;
  height: 140px;
  margin: 15px auto;
  // border: 1px solid black;
`;

const AnswerButton = styled.button`
  width: 340px;
  height: 52px;
  border: none;
  border-radius: 125px;
  color: #909090;
  font-size: 1.5rem;
  // dispaly: block;
  margin: 8px 27px;
  cursor: pointer;
  &:hover{
    background-color: rgba(29,198,209,0.3);
    color: #1DC6D1;
    opacity: 0.8;
  }
  &:focus {
    background-color: #1dc6d1;
    color: #fff;
  }
`;

const PageMoveBox = styled.div`
  width: 340px;
  height: 55px;
  margin: 246px auto;
  // border: 1px solid black;
`;

const PastButton = styled.button`
  width: 60px;
  height: 55px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 50px;
  padding: 11px;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 250px;
  height: 55px;
  float: right;
  border: none;
  border-radius: 30px;
  background-color: #1dc6d1;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.text`
  margin: 8px 0 0 65px;
  display: flex;
`;

export default Option05;
