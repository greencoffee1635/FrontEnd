import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";

// components

// css

function Option03 (props) {
  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>3/10</Number>
          <Question>언제 출발 예정이신가요?</Question>
        </Box>


        <Calendar>달력</Calendar>

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

const Calendar = styled.div`
  width: 20vw;
  height: 45vh;
  border: 2px solid #484848;
  margin: 15px auto;
  font-size: 1.5rem;
`;

export default Option03;

