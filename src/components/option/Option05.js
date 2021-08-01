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
          <AnswerButton>네! 결정했어요.</AnswerButton>
          <AnswerButton>아니요. 결정하지 못했어요.</AnswerButton>
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
  transform: translate(-50%,-50%);
  width: 26.26vw;
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

const AnswerBox = styled.div`
  width: 22vw;
  height: 6vh;
  margin: 20px auto;
`;

const AnswerButton = styled.button`
  width: 22vw;
  height: 6vh;
  border: none;
  border-radius: 125px;
  color: #909090;
  font-size: 1.5rem;
  // dispaly: block;
  margin: 9px auto;
  cursor: pointer;
`;

const PageMoveBox = styled.div`
  width: 22vw;
  height: 7vh;
  margin: 349px auto ;
  // border: 1px solid black;
`;

const PastButton = styled.button`
  width: 4vw;
  height: 7.5vh;
  background-color: #BBBBBB;
  border: none;
  border-radius: 30px;
  padding: 11px;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 16.5vw;
  height: 7.5vh;
  float: right;
  border: none;
  border-radius: 30px;
  background-color: #1DC6D1;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.text`
  margin: 1vh 0 0 4vw;
  display: flex;
`;

export default Option05;
