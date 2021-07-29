import React from "react";

// shared
import Header from "../../shared/Header";
import Layout from "../../shared/Layout";

// components

// css
import "../../css/option/text.scss";
import "../../css/option/button.scss";

const option02 = (props) => {
  return (
    <>
      <Header {...props} />
      <Layout>
        <div>
          <text className="number">2/10</text>
          <br />
          <text className="question">누구와 함께 하시나요?</text>
        </div>

        <div style={{ margin: "25px auto 0px" }}>
          <button className="with">솔로</button>
          <button className="with">친구</button>
        </div>

        <div style={{ margin: "0px auto 120px" }}>
          <button className="with">연인</button>
          <button className="with">가족</button>
        </div>

        <button
          className="nextbutton"
          onClick={() => {
            props.history.push("/option03");
          }}
        >
          다음으로
        </button>
      </Layout>
    </>
  );
};

export default option02;
