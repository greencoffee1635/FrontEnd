import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// shared
import Header from "../../shared/Header";

//redux
import { setStyle, setLocationOptions } from "../../redux/modules/option";

// components


function Option07(props) {

  const dispatch = useDispatch();

  const [themeClicked, setThemeClicked] = useState(false);
  const [courseClicked, setCourseClicked] = useState(2);
 

  const relaxed = 0;
  const busy = 1;

  const healingCourse = ["A0101", "A0102", "A0202"];
  const historyCourse = ["A0201"];
  const cultureCourse = ["A0204", "A0205", "A0206"];
  const activityCourse = ["A0203", "A0301", "A0302", "A0303", "A0304", "A0305"];

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>7/7</Number>
          <Question>가고 싶은 여행을 선택하세요</Question>
        </Box>

        <ButtonBox>
          <ThemeButton
            theme={themeClicked}
            value={10}
            onClick={()=>{dispatch(setLocationOptions(healingCourse))}}
          >
            자연과 힐링
          </ThemeButton>
          <ThemeButton 
            theme={themeClicked}
            value={20}
            onClick={()=>{dispatch(setLocationOptions(activityCourse))}}
          >
            역동적 액티비티
          </ThemeButton>
        </ButtonBox>

        <ButtonBox>
          <ThemeButton 
           theme={themeClicked}
           value={30}
           onClick={()=>{dispatch(setLocationOptions(cultureCourse))}}
          >
            문화·예술
          </ThemeButton>
          <ThemeButton 
            theme={themeClicked}
            value={40}
            onClick={()=>{dispatch(setLocationOptions(historyCourse))}}
          >
            역사 탐방
          </ThemeButton>
        </ButtonBox>

        <Line/>

        <div style={{ marginTop: "30px" }}>
          <Title>여행 스타일</Title>

          <div style={{ margin: "25px" }}>
            <PickButton 
              course={courseClicked}
              value={relaxed}
              onClick={()=>{dispatch(setStyle(relaxed))}}
            >
              여유롭고 느긋한 여행
            </PickButton>
            <PickButton 
              course={courseClicked}
              value={busy}
              onClick={()=>{dispatch(setStyle(busy))}}
            >
              스케줄 알찬 여행
            </PickButton>      
          </div>
        </div>

        <NextButton
          onClick={() => {
            props.history.push("/Option02");
          }}
        >
          입력완료!
        </NextButton>
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
`;

const Question = styled.p`
  font-weight: bolder;
  font-size: 25px;
  width: 448px;
  height: 60px;
  // border: 1px solid black;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #909090;
  margin: 5px;
`;

const ButtonBox = styled.div`
  width: 300px;
  height: 145px;
  display: block;
  margin: auto;
  // border: 1px solid black;
`;

const ThemeButton = styled.button`
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

const Line = styled.hr`
  width: 100%;
  margin: 30px auto;
`;

const PickButton = styled.button`
  width: auto;
  min-width: 10px;
  height: 50px;
  margin: 5px;
  padding: 0px 21px;
  font-size: 17px;
  font-weight: bold;
  color:  ${props=>props.course === props.value ? "#fff" : "#bbbbbb"};
  background-color: ${props=>props.course === props.value ? "#1DC6D1" : "#f2f2f2"};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 198, 209, 0.3);
    color: #1dc6d1;
  }
  &:focus {
    background-color: #1dc6d1;
    color: #fff;
  }
`;

const NextButton = styled.button`
  margin: 80px auto;
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

export default Option07;
