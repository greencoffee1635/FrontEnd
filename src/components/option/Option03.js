import React, {useState} from "react";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";
import ToggleButton from "./ToggleButton";

// shared
import Header from "../../shared/Header";

// components
import Calendar from "./Calendar";
// css

function Option03 (props) {

  // const startDate

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>3/7</Number>
          <Question>언제 출발하시나요?</Question>
        </Box>

        <Calendar/> 

        <Line/>

        <div>
          <SubQuestion>아직 미정이신가요?</SubQuestion>
          <ToggleButton />
        </div> 
        <PageMoveBox>
          <PastButton
            onClick={() => {props.history.push("/Option02");}}
          >
            <img src={whiteArrowLeft} alt="" width="35px"/>
          </PastButton>

          <NextButton
            onClick={() => {props.history.push("/Option04");}}
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

const ButtonBox = styled.div`

`;

const Line = styled.hr`
  width: 100%;
  margin: 65px auto 30px;
`;

const SubQuestion = styled.p`
  font-weight: bolder;
  font-size: 2rem;
  width: 22vw;
  height: 8vh;
`;

const PageMoveBox = styled.div`
  width: 22vw;
  height: 7vh;
  margin: 30px auto ;
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

export default Option03;
