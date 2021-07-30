import React from "react";
// import styled from "styled-components";

// shared
import Header from "../../shared/Header";
import Layout from "../../shared/Layout";

// components

// css
import "../../css/option/text.scss";
import "../../css/option/button.scss";

const option01 = (props) => {
  return (
    <>
      <Header {...props} />
      <Layout>
        <div>
          <text className="number">1/10</text>
          <br />
          <text className="question">성별과 연령대를 알려주세요</text>
        </div>

        <div>
          <button className="gender">여성</button>
          <button className="gender">남성</button>
        </div>

        <div style={{ margin: "50px" }}>
          <div>
            <button className="age">10대</button>
            <button className="age">20대</button>
            <button className="age">30대</button>
          </div>
          <div>
            <button className="age">40대</button>
            <button className="age">50대</button>
            <button className="age">60대+</button>
          </div>
        </div>

        <button
          className="nextbutton"
          onClick={() => {
            props.history.push("/option02");
          }}
        >
          다음으로
        </button>
      </Layout>
    </>
  );
};
export default option01;
