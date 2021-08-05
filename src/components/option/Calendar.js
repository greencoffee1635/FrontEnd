import {useState, useRef} from "react";
import moment from "moment";
import styled from "styled-components"; 


import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
// import { findLastKey } from "lodash";


function Calendar(props) {

    const [getMoment, setMoment] = useState(moment());

    const [date, setDate] = useState("");

    const today = getMoment;
    const firstWeek = today.clone().startOf("month").week();
    const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf('month').week();
    const day = useRef(null);

    const startDate = (idx) => {
      console.log(idx)
      // setDate(idx);
      // localStorage.setItem("date",idx);
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

    return(

      <Container>

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
      </Container>
    )
}

export default Calendar;

const Container = styled.div`
  width: 393px;
  height: 400px;
  // border: 1px solid black;
`;

const ButtonControl = styled.div`
  display: flex;
  flex-direction: row;
  // margin: auto 50px;
`;

const ThisMonth = styled.span`
  font-size: 22px;
  font-weight: 900;
  margin: 10px;
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
  margin: 22px;
  font-size: 15px;
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
  width: 56px;
  height: 56px;
  cursor: pointer;
  &:hover{
    background-color: #1DC6D1;
    border-radius: 30px; 
    opacity: 0.8; 
  }
  &:focus{
    background-color: #1DC6D1;
    border-radius: 30px; 
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Today = styled.button`
  width: 56px;
  height: 56px;
  background-color: rgba(29,198,209,0.3);
  border: none;
  border-radius: 30px;  
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
  margin: 13px;
  border: none;
  cursor: pointer;
  // border: 1px soild black;  
`;
