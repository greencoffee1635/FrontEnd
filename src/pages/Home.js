import React from "react";

// shared
import Header from "../shared/Header";
import Container from "../shared/Container";

// elements
import Button from "../elements/Button";

// css
import "../css/home.scss";

function Home(props) {
  return (
    <>
      <Header />
      <Container justifyContent="center" bgImg>
        <div className="title">
          <div>
            1분만에 나만의 여행 계획표 받고
            <br />
            당일치기 여행 지금 바로 떠나자!
          </div>
          <div>여행 계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해</div>
          <Button>시작하기</Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
