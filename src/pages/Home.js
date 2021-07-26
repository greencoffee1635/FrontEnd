import React from "react";

// shared
import Header from "../shared/Header";
import Container from "../shared/Container";

// elements
import Button from "../elements/Button";

// components
import Background from "../components/Background";

// css
import "../css/home.scss";

function Home(props) {
  return (
    <>
      <Header logoColor="mint" menuColor="white" />
      <Background />
      <Container justifyContent="center">
        <div className="title">
          <div>
            1분만에 나만의 여행 계획표 받고
            <br />
            당일치기 여행 지금 바로 떠나자!
          </div>
          <div>여행 계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해</div>
        </div>
        <Button mobileWidth="90%" mobileHeight="52px">
          시작하기
        </Button>
      </Container>
    </>
  );
}

export default Home;
