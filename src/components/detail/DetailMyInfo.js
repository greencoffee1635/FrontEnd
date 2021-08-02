import React from "react";
import styled from "styled-components";

const DetailMyInfo = (props) => {
  return (
    <>
      <MyInfoBox>
        <Emoji></Emoji>
        <InfoContainer>
          <UserNick>OO 님!</UserNick>
          <InfoSuggest>
            “요즘 SNS에서 가장 핫한 경주 황리단길에서 인생샷 건져 보세요!”
          </InfoSuggest>
        </InfoContainer>
      </MyInfoBox>
    </>
  );
};

const MyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Emoji = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #ffff;
  position: absolute;
  margin-left: -50px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 2%), 0 4px 6px 0 rgb(83 83 92 / 11%);
`;

const InfoContainer = styled.div`
  width: 405px;
  height: 130px;
  background-color: #ededed;
  border-radius: 20px;
  padding: 29px 26px 33px 70px;
  box-sizing: border-box;
  align-items: center;
`;

const UserNick = styled.div`
  display: flex;
  font-weight: 700;
  justify-content: flex-start;
  font-size: 24px;
`;

const InfoSuggest = styled.div`
  margin-top: 10px;
  color: #313131;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`;

export default DetailMyInfo;
