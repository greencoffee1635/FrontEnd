import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";

// components


function Option02 (props) {
  return (
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>2/10</Number>
          <Question>성별과 연령대를 알려주세요</Question>
        </Box>

        <ButtonBox>
          <WithButton>솔로</WithButton>
          <WithButton>친구</WithButton>
        </ButtonBox>

        <ButtonBox>
          <WithButton>연인</WithButton>
          <WithButton>가족</WithButton>
        </ButtonBox>

        <NextButton
          onClick={() => {props.history.push("/Option03");}}
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

const WithButton = styled.button`
  width: 7vw;
  height: 12vh;
  border: none;
  border-radius: 10px;
  margin: 10px 10px;
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
export default Option02;

