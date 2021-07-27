import React from "react";
import styled from "styled-components";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

import "../css/detail/detail.scss";

function Detail(props) {
  return (
    <>
      <Header />
      <Layout page="detail">
        <div className="hellobox">
          <div className="hello">
            Hello!
            <br />
            Gyeongju!
            <br />
          </div>
          <div className="aboutnspeech">
            <div className="about">
              About
              <div className="aboutcontent">
                지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든
                문화 유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를
                비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난
                건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다.
                경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도
                좋다. 16곳의 명소를 탐방할 때마다 찍히는 도장 모으는 재미가
                쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가 가능하다.
              </div>
            </div>
            <div className="degreespeech">
              화창한 날씨! 행복한 여행되세요:)
              <div className="degreebox">
                <div className="degreecity">
                  경상북도 경주시
                  <br />
                  21년 7월 27일
                </div>
                <div className="maxmindegree">
                  최고: 34도
                  <br />
                  최저: 26도
                  <div className="degree">29도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Detail;
