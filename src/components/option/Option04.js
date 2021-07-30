import React from "react";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";

// components

// css


function Option04 (props) {
  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>4/10</Number>
          <Question>출발하시는 곳을 알려주세요</Question>
        </Box>

        <SearchAddress
          placeholder="  시/구까지 입력해주세요"
        />

        <NextButton
          // onClick={() => {props.history.push("/Option05");}}
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

const SearchAddress = styled.input`
  width: 22vw;
  height: 7.5vh;
  border: 2px solid #E2E2E2;
  border-radius: 125px;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 260px;
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

export default Option04;


