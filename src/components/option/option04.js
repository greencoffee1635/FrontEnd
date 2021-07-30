import React from "react";

// shared
import Header from "../../shared/Header";
import Layout from "../../shared/Layout";

// components

// css
import "../../css/option/text.scss";
import "../../css/option/button.scss";

const option04 = (props) => {
  return (
    <>
      <Header {...props} />
      <Layout>
        <div>
          <text className="number">4/10</text>
          <br />
          <text className="question">출발하시는 곳을 알려주세요</text>
        </div>

        <div className="center">
          <input
            className="address"
            placeholder="  시/구까지 입력해주세요"
          ></input>

          <button className="nextbutton">다음으로</button>
        </div>
      </Layout>
    </>
  );
};

export default option04;
