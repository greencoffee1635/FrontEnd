import React from "react";
import styled from "styled-components";

import search from "../../images/search.png";
import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";

// shared
import Header from "../../shared/Header";

// components

// css


function Option04 (props) {

  console.log(props)

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>4/7</Number>
          <Question>어디에서 출발하시나요?</Question>
        </Box>

        <SearchBox>
          <SearchAddress
            placeholder="  시/구까지 입력해주세요"
          >
          </SearchAddress>

          <SearchButton>
          <img src={search} alt="" width="26px"/>
          </SearchButton>
        </SearchBox>

        <PageMoveBox>
          <PastButton
            onClick={() => {props.history.push("/Option03");}}
          >
            <img src={whiteArrowLeft} alt="" width="35px"/>
          </PastButton>

          <NextButton
            onClick={() => {props.history.push("/Option05");}}
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

const SearchBox = styled.div`
  width: 26vw;
  height: 7.5vh;
  border-radius: 125px;
  display: block;
  margin: 30px auto;
  box-sizing:border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`;

const SearchAddress = styled.input`
  width: 22vw;
  height: 6vh;
  border: 2px solid rgba(29,198,209,0.6);
  border-radius: 125px;
  padding: 0px 0px 0px 20px;
  font-size: 1.5rem;
  font-color: #BBBBBB;
  text-align: 10px left;
  :focus {
    outline:none;
  }
`;

const SearchButton = styled.button`
  width: 3vw;
  height: 6vh;
  color: rgba(29,198,209,0.6);
  background-color: #fff;
  border: none;
  border-radius: 30px;
  padding: px;
  margin: 1px 0px 0px -50px;
  position:"absolute"
`;

const PageMoveBox = styled.div`
  width: 22vw;
  height: 7vh;
  margin: 328px auto ;
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

export default Option04;


