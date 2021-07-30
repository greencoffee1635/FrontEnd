import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";


// components

function Option01(props) {
  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>1/10</Number>
          <Question>성별과 연령대를 알려주세요</Question>
        </Box>

        <ButtonBox>
          <GenderButton>여성</GenderButton>
          <GenderButton>남성</GenderButton>
        </ButtonBox>         

        <ButtonBox>
             <AgeButton>10대</AgeButton>
             <AgeButton>20대</AgeButton>
             <AgeButton>30대</AgeButton>
        </ButtonBox>
        <ButtonBox>
             <AgeButton>40대</AgeButton>
             <AgeButton>50대</AgeButton>
             <AgeButton>60대+</AgeButton>
        </ButtonBox>

        <NextButton
          onClick={() => {props.history.push("/Option02");}}
        >
          다음으로
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
  width: 30vw;
  height: 75%;
  border: 1px solid black;
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

const GenderButton = styled.button`
  width: 5vw;
  height: 10vh;
  border: none;
  border-radius: 12px;
  margin: 40px 40px;
  cursor: pointer;
`;

const AgeButton = styled.button`
  width: 7vw;
  height: 7vh;
  border: none;
  border-radius: 5px;
  margin: 2px 2px;
  cursor: pointer;
`;

const NextButton = styled.button`
  margin: 50px auto ;
  width: 22vw;
  height: 7.5vh;
  border: none;
  border-radius: 125px;
  background-color: #484848;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`;


export default Option01;


