import React, { useState } from "react";
import styled from "styled-components";

// components
import Entire from "./what-else-components/Entire";
import TouristSpot from "./what-else-components/TouristSpot";
import Food from "./what-else-components/Food";
import Activity from "./what-else-components/Activity";

const DetailWhatElse = (props) => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);

  const data = [
    {
      name: "불국사",
      subTitle: "불교사찰",
      src: "https://images.unsplash.com/photo-1517868674985-0525518ae392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "무령왕릉",
      subTitle: "왕릉",
      src: "https://pds.joins.com/news/component/htmlphoto_mmdata/201704/24/ea24516d-5e22-44ed-b220-92138ca320c8.jpg",
    },
    {
      name: "가로수길",
      subTitle: "불교사찰",
      src: "https://images.unsplash.com/photo-1517868674985-0525518ae392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "에버랜드",
      subTitle: "불교사찰",
      src: "https://images.unsplash.com/photo-1517868674985-0525518ae392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "불국사",
      subTitle: "불교사찰",
      src: "https://images.unsplash.com/photo-1517868674985-0525518ae392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  return (
    <>
      <Title>What else</Title>

      <div>
        <Button1
          isClick={button1}
          onClick={() => {
            setButton1(!button1);
            setButton2(false);
            setButton3(false);
            setButton4(false);
          }}
        >
          전체
        </Button1>
        <Button2
          isClick={button2}
          onClick={() => {
            setButton1(false);
            setButton2(!button2);
          }}
        >
          관광지
        </Button2>
        <Button3
          isClick={button3}
          onClick={() => {
            setButton1(false);
            setButton3(!button3);
          }}
        >
          음식
        </Button3>
        <Button4
          isClick={button4}
          onClick={() => {
            setButton1(false);
            setButton4(!button4);
          }}
        >
          액티비티
        </Button4>
        <Button5
          isClick={button5}
          onClick={() => {
            setButton5(!button5);
          }}
        >
          기타
        </Button5>
      </div>
      {/* {isEmpty && <EmptyPage />} */}
      {button1 && <Entire data={data} />}
      {button2 && <TouristSpot data={data} />}
      {button3 && <Food data={data} />}
      {button4 && <Activity data={data} />}
    </>
  );
};

const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 55px;
  font-weight: 700;
  color: #121212;
  margin-bottom: 20px;
`;

const Button1 = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

const Button2 = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

const Button3 = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

const Button4 = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

const Button5 = styled.button`
  margin-right: 15px;
  border: 2px solid #1dc6d1;
  padding: 14px 24px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isClick ? "#1dc5d1;" : "#fff;")};
  color: ${(props) => (props.isClick ? "#fff;" : "#1dc5d1;")};
`;

export default DetailWhatElse;
