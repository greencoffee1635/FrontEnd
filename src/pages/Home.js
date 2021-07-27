import React from "react";

// shared
import Header from "../shared/Header";
import Layout from "../shared/Layout";

// components
import Background from "../components/home/Background";

// css
import "../css/home/home.scss";

function Home(props) {
  return (
    <>
      {/* page는 home 또는 detail. home은 메인페이지, detail은 나머지페이지 */}
      <Header page="home" />
      <Background />
      {/* <Container justifyContent="center"> */}
      <Layout page="main">
        <div className="title">
          <div>
            1분만에 나만의 여행 계획표 받고
            <br />
            당일치기 여행 지금 바로 떠나자!
          </div>
          <div>여행 계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해</div>
        </div>
        {/* <Button mobileWidth="90%" mobileHeight="52px"> */}
        <button className="button">시작하기</button>
      </Layout>
    </>
  );
}

export default Home;
