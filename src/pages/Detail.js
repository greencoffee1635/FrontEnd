import React from "react";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

import "../css/detail/detail.scss";
import VideoSwiper from "../components/detail/Swiper";

function Detail(props) {
  return (
    <>
      <Header page="main" {...props} />
      <div className="headimage" alt="WTGT"></div>

      <Layout page="detail">
        <section className="first-box">
          <h1 className="hello">
            Hello!
            <br />
            Gyeongju!
            <br />
          </h1>
          <div className="aboutntemp">
            <div className="aboutbox">
              <h1 className="about">About</h1>
              {/* <div className="corona"></div> */}
              <p className="aboutcontent">
                지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든
                문화 유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를
                비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난
                건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다.
                경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도
                좋다. 16곳의 명소를 탐방할 때마다 찍히는 도장 모으는 재미가
                쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가 가능하다.
              </p>
              <ul className="tag">
                <li>
                  <a href="#">#황리단길</a>
                </li>
                <li>
                  <a href="#">#황남빵</a>
                </li>
                <li>
                  <a href="#">#찰보리빵</a>
                </li>
                <li>
                  <a href="#">#유적지</a>
                </li>
              </ul>
            </div>
            <div className="temp-area">
              <div className="tempspeech">화창한 날씨! 행복한 여행되세요:)</div>
              <div className="tempcontent">
                <div className="tempcity">
                  <span>경상북도 경주시</span>
                  <br />
                  <span>21년 7월 26일</span>
                </div>
                <div className="temperature">
                  <div>
                    <span>최고: 34º</span>
                    <br />
                    <span>최저: 26º</span>
                  </div>
                  <div>29º</div>
                </div>
              </div>
            </div>
          </div>
          <div className="videolist">
            <VideoSwiper />
          </div>
        </section>
        <section className="map-box">
          <div className="map-area"></div>
          <div className="schedule">Schedule</div>
        </section>
        <section className="what-else">
          <div>
            <h2 className="what-else__title">What else?</h2>
            <ul className="what-else__filter">
              <li>전체</li>
              <li>관광지</li>
              <li>음식</li>
              <li>액티비티</li>
              <li>축제</li>
              <li>여행후기</li>
            </ul>
          </div>
          <div className="what-else__category-wrap">
            <div className="what-else__category">
              <h3>#관광지</h3>
              <div></div>
            </div>
          </div>
        </section>
        <section className="button-area">
          <button>다시하기</button>
          <button>저장하기</button>
        </section>
      </Layout>
    </>
  );
}

export default Detail;
