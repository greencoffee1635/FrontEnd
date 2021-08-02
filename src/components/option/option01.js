import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import whiteArrowRight from "../../images/whiteArrowRight.png";

// shared
import Header from "../../shared/Header";


// components

function Option01(props) {

  // const [clickButton, ]


  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>1/7</Number>
          <Question>성별과 연령대를 알려주세요</Question>
        </Box>

        <div>
          <GenderBox>
            <GenderButton/>
            <GenderButton/>
            {/* <TextBox> */}
              <GenderText>여성</GenderText>
              <GenderText>남성</GenderText>
            {/* </TextBox> */}
          </GenderBox>         

          <ButtonBox>
              <AgeButton>10대</AgeButton>
              <AgeButton>20대</AgeButton>
              <AgeButton>30대</AgeButton>
          {/* </ButtonBox>
          <ButtonBox> */}
              <AgeButton>40대</AgeButton>
              <AgeButton>50대</AgeButton>
              <AgeButton>60대+</AgeButton>
          </ButtonBox>

          <NextButton
            onClick={() => {props.history.push("/Option02");}}
          >
            <div>
              <Text>
                다음으로 
                <img src={whiteArrowRight} alt="" width="40px" style={{marginTop: "-7px"}}/>
              </Text>
            </div>
          </NextButton>
        </div>
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

const GenderBox = styled.div`
  width: 21.3vw;
  height: 20vh;
  display: block;
  margin: auto;
  align-items: center
  justify-content: center;
  // border: 1px solid black;
`;

const GenderButton = styled.button`
  width: 5.30vw;
  height: 10vh;
  background-color: #BBBBBB;
  border: none;
  border-radius: 12px;
  margin: 15px 40px;
  justify-content: center;
  cursor: pointer;
  &:hover{
    background-color: rgba(29,198,209,0.3);
    color: #1DC6D1;
  }
`;

// const TextBox = styled.div`
//   width: 21.5vw;
//   height: 4vh;
//   display: block;
//   just
//   margin: auto;
//   text-align: center;
//   border: 1px solid black;
// `; 

const GenderText = styled.span`
  margin: auto 66.5px;
  font-size: 1.4rem;
  font-weight: bold;
  // border: 1px solid black;
`;

const ButtonBox = styled.div`
  width: 25.8vw;
  height: 16.5vh;
  display: block;
  margin: 25px auto;
  // border: 1px solid black;
`;

const AgeButton = styled.button`
  width: 8.33vw;
  height: 7.75vh;
  font-size: 1.5rem;
  font-weight: bold;
  color: #BBBBBB;
  border: none;
  border-radius: 5px;
  margin: 2px 2px;
  cursor: pointer;
  &:hover{
    background-color: rgba(29,198,209,0.3);
  }
`;

const NextButton = styled.button`
  margin: 114px auto ;
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
  bottom: 0;
`;
const Text = styled.text`
  margin: 1.8vh 6.7vw;
  display: flex;
`;


export default Option01;


