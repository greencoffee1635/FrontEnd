import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";
import map from "../../images/map.png";

import RoomIcon from '@material-ui/icons/Room';
//redux
import { setWideAreaCode, setSmallAreaCode } from "../../redux/modules/option";
// shared
import Header from "../../shared/Header";

// components
import MapModal from "./MapModal";

function Option06_0(props) {

  const dispatch = useDispatch();

  const [ modalOpen, setModalOpen ] = useState(false); 
  const openModal = () => { setModalOpen(true); }
  const closeModal = () => { setModalOpen(false); } 

  const seoul= 1;
  const incheon = 2;
  const daejeon = 3;
  const daegu = 4;
  const gwangju = 5;
  const busan = 6;
  const ulsan = 7;
  const sejong = 8;
  const gyeonggi = 31;
  const gangwon = 32;
  const chungBuk = 33;
  const chungNam = 34;
  const gyeongBuk = 35;
  const gyeongNam = 36;
  const jeonBuk = 37;
  const jeonNam = 38;
  const jeju = 39;

  return(
    <>
      <Header {...props} />
      <Container>

        <Box>
          <Number>6/7</Number>
          <Question>여행지를 알려주세요</Question>
        </Box>

        <Map>
          {/*전국*/}
          <div style={{display:"block", margin:"5px 85px"}}>
            <img src={map} alt="" width="300px" height="500"/>
          </div>

          {/*제주도*/}
          <div>
          <Select style={{display:"block", margin:"-60px 120px" }}>
            <RoomIcon id="Jeju" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal} title= "제주도"/>:null}
          </Select>
          </div>

          {/*전라남도*/}
          <Select style={{display:"block", margin:"-140px 120px"}}>
            <RoomIcon id="JeonNam" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*광주광역시*/}
          <Select style={{display:"block", margin:"65px 155px"}}>
            <RoomIcon id="Gwangju" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*전라북도*/}
          <Select style={{display:"block", margin:"-140px 175px"}}>
            <RoomIcon id="JeonBuk" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*충청남도*/}
          <Select style={{display:"block", margin:"20px 130px"}}>
            <RoomIcon id="ChungNam" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*대전광역시*/}
          <Select style={{display:"block", margin:"-40px 182px"}}>
            <RoomIcon id="Daejeon" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*세종특별시*/}
          <Select style={{display:"block", margin:"-66px 172px"}}>
            <RoomIcon id="Sejong" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*경기도*/}
          <Select style={{display:"block", margin:"-150px 180px"}}>
            <RoomIcon id="Gyeonggi" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>
          
          {/*서울*/}
          <Select style={{display:"block", margin:"155px 165px"}}>
            <RoomIcon id="Seoul" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal} title="서울"/>:null}
          </Select>

          {/*인청광역시*/}
          <Select style={{display:"block", margin:"-200px 120px"}}>
            <RoomIcon id="Incheon" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*강원도*/}
          <Select style={{display:"block", margin:"150px 250px"}}>
            <RoomIcon id="Gangwon" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*충청북도*/}
          <Select style={{display:"block", margin:"-70px 215px"}}>
            <RoomIcon id="ChungBuk" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*경상북도*/}
          <Select style={{display:"block", margin:"50px 300px"}}>
            <RoomIcon id="GyeongBuk" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*대구광역시*/}
          <Select style={{display:"block", margin:"-25px 280px"}}>
            <RoomIcon id="Daegu" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*경상남도*/}
          <Select style={{display:"block", margin:"60px 240px"}}>
            <RoomIcon id="GyeongNam" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*울산광역시*/}
          <Select style={{display:"block", margin:"-145px 340px"}}>
            <RoomIcon id="Ulsan" onClick={openModal}/>
             {modalOpen? <MapModal close={closeModal}/>:null}
          </Select>

          {/*부산광역시*/}
          <Select style={{display:"block", margin:"145px 305px"}}>
            <RoomIcon id="Busan" onClick={openModal}/>
              {modalOpen? <MapModal close={closeModal} title="부산"/>:null}
          </Select>
        </Map>

        <PageMoveBox>
          <PastButton
            onClick={() => {props.history.push("/Option05");}}
          >
            <img src={whiteArrowLeft} alt="" width="35px"/>
          </PastButton>

          <NextButton
            onClick={() => {
              props.history.push("/Option07");
          
            }}
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
  width: 450px;
  height: 60px;
  // border: 1px solid black;
`;

const Map = styled.div`
  width: 448px;
  height: 560px;
  // border: 1px solid black;
`;

const Select = styled.div`
  cursor: pointer;  
  & #Jeju      { font-size: 33px; color: #bbbbbb; }
  & #JeonNam   { font-size: 33px; color: #bbbbbb; }
  & #Gwangju   { font-size: 33px; color: #bbbbbb; }
  & #JeonBuk   { font-size: 33px; color: #bbbbbb; }
  & #ChungNam  { font-size: 33px; color: #bbbbbb; }
  & #Daejeon   { font-size: 33px; color: #bbbbbb; }
  & #Sejong    { font-size: 33px; color: #bbbbbb; }
  & #Gyeonggi  { font-size: 33px; color: #bbbbbb; }
  & #Seoul     { font-size: 33px; color: #bbbbbb; }
  & #Incheon   { font-size: 33px; color: #bbbbbb; }
  & #Gangwon   { font-size: 33px; color: #bbbbbb; }
  & #ChungBuk  { font-size: 33px; color: #bbbbbb; }
  & #GyeongBuk { font-size: 33px; color: #bbbbbb; }
  & #Daegu     { font-size: 33px; color: #bbbbbb; }
  & #GyeongNam { font-size: 33px; color: #bbbbbb; }
  & #Ulsan     { font-size: 33px; color: #bbbbbb; }
  & #Busan     { font-size: 33px; color: #bbbbbb; }
      
  &: hover > #Jeju      { transform: scale(1.5); color: #1dc6d1; }
  // &: focus > #Jeju      { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #JeonNam   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gwangju   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #JeonBuk   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #ChungNam  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Daejeon   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Sejong    { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gyeonggi  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Seoul     { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Incheon   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Gangwon   { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #ChungBuk  { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #GyeongBuk { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Daegu     { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #GyeongNam { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Ulsan     { transform: scale(1.5); color: #1dc6d1; }
  &: hover > #Busan     { transform: scale(1.5); color: #1dc6d1; }
`;

const PageMoveBox = styled.div`
  width: 340px;
  height: 55px;
  margin: auto;
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

export default Option06_0;