import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";

// shared
import Header from "../../shared/Header";

import { setCategory } from "../../redux/modules/option";

function Option02(props) {

  const [combine, setCombine] = useState([]);

  const dispatch = useDispatch();

  const changeSolo = (e) => {
    setCombine(["C0113", "C0114", "C0115"]);
  };

  const changeCouple = (e) => {
    setCombine(["C0114", "C0115"]);
  };

  const changeFamily = (e) => {
    setCombine(["C0112", "C0114", "C0115"]);
  };

  useEffect(() => {
    console.log(combine);
  }, [combine]);

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>2/7</Number>
          <Question>누구와 함께 하시나요?</Question>
        </Box>

        <ButtonBox>
          <WithButton onClick={changeSolo}>솔로</WithButton>
          <WithButton onClick={changeCouple}>친구</WithButton>
        </ButtonBox>

        <ButtonBox>
          <WithButton onClick={changeCouple}>연인</WithButton>
          <WithButton onClick={changeFamily}>가족</WithButton>
        </ButtonBox>

        <PageMoveBox>
          <PastButton
            onClick={() => {
              props.history.push("/Option01");
            }}
          >
            <img src={whiteArrowLeft} alt="" width="35px" />
          </PastButton>

          <NextButton
            onClick={() => {
              props.history.push("/Option03");
              dispatch(
                setCategory(
                  combine
                )
              );
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
        </PageMoveBox>
      </Container>
    </>
  );
}

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


const ButtonBox = styled.div`
  width: 300px;
  height: 145px;
  display: block;
  margin: auto;
  // border: 1px solid black;
`;

const WithButton = styled.button`
  width: 130px;
  height: 125px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  margin: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 198, 209, 0.3);
  }
  &:focus {
    background-color: #1dc6d1;
    border-radius: 30px;
  }
`;

const PageMoveBox = styled.div`
  width: 340px;
  height: 55px;
  margin: 114px auto;
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

export default Option02;
