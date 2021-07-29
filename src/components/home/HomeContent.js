import React from "react";

// css
import "../../css/home/homeContent.scss";

const HomeContent = (props) => {
  const { history } = props;
  return (
    <>
      <div className="title">
        <div>
          1분만에 나만의 여행 계획표 받고
          <br />
          당일치기 여행 지금 바로 떠나자!
        </div>
        <div>여행 계획 세우기는 귀찮지만 놀러는 가고 싶은 당신을 위해</div>
      </div>
      {/* <Button mobileWidth="90%" mobileHeight="52px"> */}
      <button
        className="button"
        onClick={() => {
          history.push("/option01");
        }}
      >
        시작하기
      </button>
    </>
  );
};

export default HomeContent;
