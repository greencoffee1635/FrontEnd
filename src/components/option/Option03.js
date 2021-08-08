import React, { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import whiteArrowLeft from "../../images/whiteArrowLeft.png";
import whiteArrowRight from "../../images/whiteArrowRight.png";
import ToggleButton from "./ToggleButton";

// shared
import Header from "../../shared/Header";

import { setStartDate } from "../../redux/modules/option";

// components


import moment from "moment";



import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


function Option03(props) {
  const dispatch = useDispatch();

  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf('month').week();

  const startDate = (index) => {
    console.log(index)
    dispatch(setStartDate(index))
  }

  const calendarArr=()=>{
      let result = [];
      let week = firstWeek;
      for (week; week <= lastWeek; week++){
        result = result.concat(
          <Tr key={week}>
            {   // eslint-disable-next-line no-loop-func
              Array(7).fill(0).map((data, index)=> {
                let days = today.clone().startOf("year").week(week).startOf("week").add(index, "day");
                    if(moment().format("YYYYMMDD") === days.format("YYYYMMDD")){
                        return(
                          
                          <Today key={index} 
                          //   style={{backgroundColor:"red"}}
                          >
                            <Span>{days.format("D")}</Span>
                          </Today>
                        );
                    }else if(days.format("MM") !== today.format("MM")) {
                        return(
                          <Td 
                            key={index}  
                            style={{color:"#E2E2E2"}}
                            onClick={()=>{startDate(days.format("YYYY-MM-DD"))}}  
                          >
                            <Span>{days.format("D")}</Span>
                          </Td>
                        );
                    }else {
                        return(
                          <Td 
                            key={index} 
                            onClick={()=>{startDate(days.format("YYYY-MM-DD"))}}  
                          >
                            <Span>{days.format("D")}</Span>
                          </Td>  
                        )
                      
                    }
                })
            }
          </Tr>
      );
  }
  return result;
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <Box>
          <Number>3/7</Number>
          <Question>언제 출발하시나요?</Question>
        </Box>

        <ContainerT>

        <div style={{fontSize:"18px" , display: "block", margin:"auto"}}>
          <ButtonControl>
            <ThisMonth>{today.format("YYYY.MM")}</ThisMonth>
            <div style={{display: "flex",justifyContent: "space-between", margin: "auto 175px"}}>
            <Button onClick={()=>{setMoment(getMoment.clone().subtract(1, 'month'))}}>
              <img src={leftArrow} alt="" width="20px"/>
            </Button>    
            <Button onClick={()=>{setMoment(getMoment.clone().add(1, 'month'))}}>
              <img src={rightArrow} alt="" width="20px"/>
            </Button>
            </div>
          </ButtonControl>
            <Table>
              <Body>
                <DateHeader>
                <WeekName>S</WeekName>
                <WeekName>M</WeekName>
                <WeekName>T</WeekName>
                <WeekName>W</WeekName>
                <WeekName>T</WeekName>
                <WeekName>F</WeekName>
                <WeekName>S</WeekName>
                </DateHeader>  
                {calendarArr()}
              </Body>
              </Table>
          </div>
        </ContainerT>

        <Line />

        <div style={{display:"flex"}}>
          <SubQuestion>아직 미정이신가요?</SubQuestion>
          <ToggleButton />
        </div>
        <PageMoveBox>
          <PastButton
            onClick={() => {
              props.history.push("/Option02");
            }}
          >
            <img src={whiteArrowLeft} alt="" width="35px" />
          </PastButton>

          <NextButton
            onClick={() => {
              props.history.push("/Option04");
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
  width: 394px;
  height: 60px;
  // border: 1px solid black;
`;

const ButtonBox = styled.div``;

const Line = styled.hr`
  width: 450px;
  margin: 130px auto 30px;
`;

const SubQuestion = styled.p`
  font-weight: bolder;
  font-size: 19px;
  width: 329px;
  height: 50px;
  // border: 1px solid black;
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

// >>>>>>>>>>>>>>>>>>달력CSS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const ContainerT = styled.div`
  width: 450px;
  height: 400px
  // border: 2px solid black;
`;

const ButtonControl = styled.div`
  display: flex;
  flex-direction: row;
  // margin: auto 50px;
`;

const ThisMonth = styled.span`
  font-size: 23px;
  font-weight: 900;
  margin: auto 35px auto 12px;
`;

const Table = styled.div`
  display: flex;
  width: 26.26vw;
  height: 50vh;
`;

const Body = styled.div`
  display:flex;
  flex-direction: column;
`;

const DateHeader = styled.div`
  dispaly: block;
  margin: 16px auto 20px;
`;
const WeekName = styled.span`
  margin: 25.5px;
  font-size: 16px;
  color: #909090;
`;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;

const Td = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  // border:1px solid gray;
  border: none;
  background-color: #fff;
  width: 63.5px;
  height: 63.5px;
  cursor: pointer;
  &:hover{
    background-color: #1DC6D1;
    border-radius: 50px; 
    opacity: 0.8; 
  }
  &:focus{
    background-color: #1DC6D1;
    border-radius: 50px; 
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Today = styled.button`
  width: 63.5px;
  height: 63.5px;
  background-color: rgba(29,198,209,0.3);

  border: none;
  border-radius: 50px;  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #1DC6D1;
    opacity: 0.8; 
  }
  &:focus{
    background-color: #1DC6D1;
    border-radius: 30px; 
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fff;
  margin: 20px;
  border: none;
  cursor: pointer;
  // border: 1px soild black;  
`;

export default Option03;
