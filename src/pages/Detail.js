import React from "react";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

import VideoSwiper from "../components/detail/Swiper";
import styled from "styled-components";

function Detail(props) {
  return (
    <>
      <Header page="main" {...props} />
      <HeadImage></HeadImage>

      <Layout page="detail">
        <FirstBox>
          <Hello>
            Hello!
            <br />
            Gyeongju!
            <br />
          </Hello>
          <Aboutntemp>
            <AboutBox>
              <About>About</About>
              <Aboutcontent>
                지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든
                문화 유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를
                비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난
                건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다.
                경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도
                좋다. 16곳의 명소를 탐방할 때마다 찍히는 도장 모으는 재미가
                쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가 가능하다.
              </Aboutcontent>
              <Tag>
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
              </Tag>
            </AboutBox>
            <TempArea>
              <Tempspeech>화창한 날씨! 행복한 여행되세요:)</Tempspeech>
              <Tempcontent>
                <TempCity>
                  <span>경상북도 경주시</span>
                  <br />
                  <span>21년 7월 26일</span>
                </TempCity>
                <Temperature>
                  <div>
                    <span>최고: 34º</span>
                    <br />
                    <span>최저: 26º</span>
                  </div>
                  <div>29º</div>
                </Temperature>
              </Tempcontent>
            </TempArea>
          </Aboutntemp>
          <div className="videolist">
            <VideoSwiper />
          </div>
        </FirstBox>
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

const HeadImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 44rem;
  background: transparent;
  background-image: linear-gradient(to top, rgb(255, 255, 255), transparent 35%),
    url("https://waynabox.com/assets/road/routes_upfold_photo_hd.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const FirstBox = styled.div`
  width: 106rem;
  margin-top: 33rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Hello = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const Aboutntemp = styled.div`
  margin-top: 50px;
  height: 38.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AboutBox = styled.div`
  width: 52rem;
  display: flex;
  flex-direction: column;
`;

const About = styled.h1`
  font-size: 5.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Aboutcontent = styled.p`
  width: 52rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.8;
  margin-top: 10px;
`;

const Tag = styled.ul`
  color: var(--main-color);
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  padding: 1.5rem 0 0 0;
  font-weight: medium;
  & > li {
    margin-right: 1rem;
  }
  & a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--main-color);
    text-decoration: none;
  }
`;

const TempArea = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
`;

const Tempspeech = styled.div`
  width: 27rem;
  height: 5.5rem;
  font-size: 1.71rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--main-color);
  border-radius: 0.4em;
  margin-right: 1.3rem;
  left: 30%;
  opacity: 0.9;
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 85%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: var(--main-color);
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
`;

const Tempcontent = styled.div`
  box-sizing: border-box;
  width: 40rem;
  height: 18rem;
  margin-top: 2rem;
  flex-direction: column;
  display: flex;
  background-color: #e5e5e5;
  flex-direction: column;
  border-radius: 1.5rem;
  padding: 2rem;
`;

const TempCity = styled.div`
  font-size: 2.5rem;
  color: black;
  font-weight: 600;
  line-height: 1.2;
  & > span:first-child {
    font-size: 2.75rem;
  }
`;

const Temperature = styled.div`
  display: flex;
  height: 100%;
  font-weight: 600;
  justify-content: flex-end;
  & > div:last-child {
    font-size: 7rem;
    align-self: flex-end;
  }
  & > div:first-child {
    font-size: 2rem;
    align-self: flex-end;
    margin-right: 1rem;
  }
`;

export default Detail;
