import React from "react";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";
import map from "../../images/map.png";

import RoomIcon from '@material-ui/icons/Room';

import ToggleButton from "./ToggleButton";

// shared
import Header from "../../shared/Header";


// components

function Option06_1(props) {
  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>6/7</Number>
          <Question>관심있는 지역을 선택해주세요</Question>
        </Box>

        <Map>
          {/*전국*/}
          <div style={{display:"block", margin:"5px 85px"}}>
            <img src={map} alt="" width="285px"/>
          </div>

          {/*제주도*/}
          <Select style={{display:"block", margin:"-60px 120px"}}>
            <RoomIcon id="Jejudo"/>
          </Select>

          {/*전라남도*/}
          <Select style={{display:"block", margin:"-150px 120px"}}>
            <RoomIcon id="JeonNam"/>
          </Select>

          {/*광주광역시*/}
          <Select style={{display:"block", margin:"65px 155px"}}>
            <RoomIcon id="Gwangju"/>
          </Select>

          {/*전라북도*/}
          <Select style={{display:"block", margin:"-140px 175px"}}>
            <RoomIcon id="JeonBuk"/>
          </Select>

          {/*충청남도*/}
          <Select style={{display:"block", margin:"20px 130px"}}>
            <RoomIcon id="ChungNam"/>
          </Select>

          {/*대전광역시*/}
          <Select style={{display:"block", margin:"-50px 175px"}}>
            <RoomIcon id="Daejeon"/>
          </Select>

          {/*세종특별시*/}
          <Select style={{display:"block", margin:"-66px 170px"}}>
            <RoomIcon id="Sejong"/>
          </Select>

          {/*경기도*/}
          <Select style={{display:"block", margin:"-150px 180px"}}>
            <RoomIcon id="Gyeonggido"/>
          </Select>
          
          {/*서울*/}
          <Select style={{display:"block", margin:"150px 165px"}}>
            <RoomIcon id="Seoul"/>
          </Select>

          {/*인청광역시*/}
          <Select style={{display:"block", margin:"-200px 110px"}}>
            <RoomIcon id="Incheon"/>
          </Select>

          {/*강원도*/}
          <Select style={{display:"block", margin:"150px 250px"}}>
            <RoomIcon id="Gangwondo"/>
          </Select>

          {/*충청북도*/}
          <Select style={{display:"block", margin:"-70px 215px"}}>
            <RoomIcon id="ChungBuk"/>
          </Select>

          {/*경상북도*/}
          <Select style={{display:"block", margin:"70px 300px"}}>
            <RoomIcon id="GyeongBuk"/>
          </Select>

          {/*대구광역시*/}
          <Select style={{display:"block", margin:"-45px 270px"}}>
            <RoomIcon id="Daegu"/>
          </Select>

          {/*경상남도*/}
          <Select style={{display:"block", margin:"60px 240px"}}>
            <RoomIcon id="GyeongNam"/>
          </Select>

          {/*울산광역시*/}
          <Select style={{display:"block", margin:"-120px 325px"}}>
            <RoomIcon id="Ulsan"/>
          </Select>

          {/*부산광역시*/}
          <Select style={{display:"block", margin:"120px 290px"}}>
            <RoomIcon id="Busan"/>
          </Select>
        </Map>
        
        <div style={{display:"flex", marginTop:"80px"}}>
          <SubQuestion>알아서 추천해주세요</SubQuestion>
          <ToggleButton />
        </div>

        <PageMoveBox>
          <PastButton
            onClick={() => {props.history.push("/Option05");}}
          >
            <img src={whiteArrowLeft} alt="" width="35px"/>
          </PastButton>

          <NextButton
            onClick={() => {props.history.push("/Option07");}}
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
  transform: translate(-50%, -50%);
  width: 450px;
  height: 560px;
  border: 1px solid black;
`;

const Box = styled.div`
  // width: 26.26vw;
`;

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

const SubQuestion = styled.p`
  font-weight: bolder;
  font-size: 19px;
  width: 329px;
  height: 50px;
  margin-right: 40px
  // border: 1px solid black;
`;

const Map = styled.div`
  width: 448px;
  height: 600px;
  border: 1px solid black;
`;

const Select = styled.div`
  cursor: pointer;  
  & #Jejudo     { font-size: 33px; color: #bbbbbb; }
  & #JeonNam    { font-size: 33px; color: #bbbbbb; }
  & #Gwangju    { font-size: 33px; color: #bbbbbb; }
  & #JeonBuk    { font-size: 33px; color: #bbbbbb; }
  & #ChungNam   { font-size: 33px; color: #bbbbbb; }
  & #Daejeon    { font-size: 33px; color: #bbbbbb; }
  & #Sejong     { font-size: 33px; color: #bbbbbb; }
  & #Gyeonggido { font-size: 33px; color: #bbbbbb; }
  & #Seoul      { font-size: 33px; color: #bbbbbb; }
  & #Incheon    { font-size: 33px; color: #bbbbbb; }
  & #Gangwondo  { font-size: 33px; color: #bbbbbb; }
  & #ChungBuk   { font-size: 33px; color: #bbbbbb; }
  & #GyeongBuk  { font-size: 33px; color: #bbbbbb; }
  & #Daegu      { font-size: 33px; color: #bbbbbb; }
  & #GyeongNam  { font-size: 33px; color: #bbbbbb; }
  & #Ulsan      { font-size: 33px; color: #bbbbbb; }
  & #Busan      { font-size: 33px; color: #bbbbbb; }
      
  &: hover > #Jejudo     { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #JeonNam    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gwangju    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #JeonBuk    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #ChungNam   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Daejeon    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Sejong     { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gyeonggido { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Seoul      { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Incheon    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gangwondo  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #ChungBuk   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #GyeongBuk  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Daegu      { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #GyeongNam  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Ulsan      { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Busan      { transform: scale(1.5); color: #1dc6d1; }
`;

const PageMoveBox = styled.div`
  width: 340px;
  height: 55px;
  margin: 30px auto;
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


export default Option06_1;