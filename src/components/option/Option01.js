import React, { useState } from "react";
import styled from "styled-components";

import whiteArrowRight from "../../images/whiteArrowRight.png";

// shared
import Header from "../../shared/Header";

// components

function Option01(props) {
  // const [genderCliked, setGenderCliked] = useState();
  // const [ageCliked, setAgeCliked] = useState();

  
  // const handle

  // const

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>1/7</Number>
          <Question>성별과 연령대를 알려주세요</Question>
        </Box>

        <div>
          <GenderBox>
            <GenderButton />
            <GenderButton />
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
            onClick={() => {
              props.history.push("/Option02");
            }}
          >
            <div>
              <Text>
                다음으로
                <img
                  src={whiteArrowRight}
                  alt=""
                  width="40px"
                  style={{ marginTop: "-7px" }}
                />
              </Text>
            </div>
          </NextButton>
        </div>
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
  // border: 1px solid black;
`;

const Question = styled.p`
  font-weight: bolder;
  font-size: 25px;
  width: 450px;
  height: 60px;
  // border: 1px solid black;
`;


const GenderBox = styled.div`
  width: 324px;
  height: 150px;
  display: block;
  margin: auto;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
`;

const GenderButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 12px;
  margin: 15px 40px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 198, 209, 0.3);
    color: #1dc6d1;
  }
  &:focus{
    background-color: #1DC6D1;
    border-radius: 30px; 
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
  margin: auto 65px;
  font-size: 15px;
  font-weight: bold;
  // border: 1px solid black;
`;

const ButtonBox = styled.div`
  width: 395px;
  height: 120px;
  display: block;
  margin: 25px auto;
  // border: 1px solid black;
`;

const AgeButton = styled.button`
  width: 127px;
  height: 57px;
  font-size: 15px;
  font-weight: bold;
  color: #bbbbbb;
  border: none;
  border-radius: 5px;
  margin: 2px 2px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 198, 209, 0.3);
  }&:focus{
    background-color: #1DC6D1;
    border-radius: 30px; 
    color: #fff;
  }
  
`;

const NextButton = styled.button`
  margin: 110px auto;
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

const Text = styled.text`
  margin: 8px 0 0 92px;
  display: flex;
`;
export default Option01;