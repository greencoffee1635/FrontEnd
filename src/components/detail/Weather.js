import React from "react";
import styled from "styled-components";

const Weather = (props) => {
  return (
    <>
      <WeatherBox>
        <SpeechBubble>화창한 날씨! 행복한 여행되세요:)</SpeechBubble>
        <TempContainer>
          <TempLocation>경상북도 경주시</TempLocation>
          <TempDate>21년 7월 27일</TempDate>
          <Temperature>
            <ul>
              <li>최고 : 34º</li>
              <li>최저 : 26º</li>
            </ul>
            <span>29º</span>
          </Temperature>
        </TempContainer>
      </WeatherBox>
    </>
  );
};

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpeechBubble = styled.div`
  position: relative;
  width: 270px;
  height: 58px;
  background-color: rgba(29, 198, 209, 0.6);
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  border-radius: 15px;
  margin: 0px 18px 13px auto;
  text-align: center;
  line-height: 58px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 84%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: rgba(29, 198, 209, 0.6);
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
`;

const TempContainer = styled.div`
  width: 405px;
  height: 180px;
  background-color: #ededed;
  border-radius: 15px;
  padding: 21px;
  box-sizing: border-box;
`;

const TempLocation = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const TempDate = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: flex-end;

  & ul {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & li {
      margin-top: 8px;
    }
  }

  & span {
    font-size: 90px;
    font-weight: 600;
    margin-left: 16px;
  }
`;

export default Weather;
