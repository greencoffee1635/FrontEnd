import React from "react";

// shared
import Header from "../../shared/Header";
import Layout from "../../shared/Layout";

// components

// css
import "../../css/option/text.scss";
import "../../css/option/button.scss";

const option03 =(props)=>{

  return(
  <>
    <Header />
    <Layout>
    <div>
            <text className="number">
            3/10
            </text>
            <br/>
            <text className="question">
            언제 출발 예정이신가요?
            </text>
        </div>

      <div className="center">
        <div className="calendar">달력</div>

        <button className="nextbutton"
         onClick={() => { props.history.push("/option04"); }}
        >
        다음으로
        </button>  
      </div>  
    </Layout>

  </>
  )
}

export default option03;